import { useReducer } from "react";
import mapsReducer from './reducer';
import axios from 'axios';

function useFlagsHooks(initialState) {
    const [state, dispatch] = useReducer(mapsReducer, initialState);

    const pesquisar = (filtro1, filtro2) => {

        if (filtro1 === 'região') {
            search('region', filtro2);

        } else if (filtro1 === 'capital') {
            search('capital', filtro2);

        } else if (filtro1 === 'lingua') {
            search('lang', filtro2);

        } else if (filtro1 === 'país') {
            search('name', filtro2);

        } else if (filtro1 === 'moeda') {
            //semanticamente no português a moeda americana se escreve 'dólar'. Porém, a api não reconhece esse formato, por isso a linha de código abaixo;
            (filtro2 === 'dolar' || filtro2 === 'dólar') && (filtro2 = 'dollar');

            search('currency', filtro2);

        } else {
            setError('Erro: Um erro interno impediu a realização da pesquisa. Por favor, recarregue a página e tente novamente.');
        };
    };

    const search = async (type, value) => {
        dispatch({ type: 'SET_LOADING' }); //switch to true;

        limparPesquisa();

        try {
            const res = await axios.get(`https://restcountries.com/v3.1/${type}/${value}?fields=flags,name`);

            dispatch({ type: 'SET_PESQUISA', data: res.data });

        } catch (error) {
            setError('Pesquisa não retornou resultados; Tente novamente');
        };
    };

    const pesquisaDetalhada = async (value) => {
        dispatch({ type: 'SET_LOADING' }); //switch to true;

        dispatch({ type: 'RESET_PESQUISA_DETALHADA' });

        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${value}?fields=flags,name,capital,region,subregion,population,languages,nativeName,borders`);

            const data = res.data[0];

            let bordas = [];

            for (let i = 0; i < data.borders.length; i++) {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${data.borders[i]}?fields=flags,name`);
                bordas.push(response.data);
            };

            data.borders = bordas;

            dispatch({ type: 'SET_PESQUISA_DETALHADA', data: data });

        } catch (error) {
            setError('Não foi possível carregar dados referente a esse país; Tente novamente');
        };
    };

    const limparPesquisa = () => {
        dispatch({ type: 'RESET_PESQUISA' });
    };

    const limparPesquisaDetalhada = () => {
        dispatch({ type: 'RESET_PESQUISA_DETALHADA' });
    };

    const setError = (error) => {
        dispatch({ type: 'SET_ERROR', data: error });

        setTimeout(() => {
            clearError();
        }, 8000);
    };

    const clearError = () => {
        dispatch({ type: 'CLEAR_ERROR' });
    };

    return {
        state,
        dispatch: { pesquisar, limparPesquisa, pesquisaDetalhada, setError, clearError, limparPesquisaDetalhada }
    };
};

export default useFlagsHooks;