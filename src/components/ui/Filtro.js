import React, { useContext, useRef, useState } from 'react';
import { dispatchContext } from '../react/context';

import styles from '../../css/filtro.module.css';

function Filtro() {
    const firstFilter = useRef();
    const secondFilter = useRef();

    const [displayFiltro, setDisplayFiltro] = useState(null);

    const { pesquisar, setError } = useContext(dispatchContext)

    const setOnSelect = () => {
        const firstOption = firstFilter.current.value;

        firstOption === '0' ? setDisplayFiltro(null) : setDisplayFiltro(firstOption);
    };

    const setOnSubmit = (e) => {
        e.preventDefault();

        const filtro1 = firstFilter.current.value;

        if (filtro1 === '0' || displayFiltro === null) {
            setError('Selecione uma opção de busca');
        } else {
            const filtro2 = secondFilter.current.value;

            if (filtro2 === '') {
                setError('Preencha o segundo campo com um texto válido');
            } else if (filtro2 === '0') {
                setError('Selecione uma região válida');
            } else {
                pesquisar(filtro1, filtro2);
            };
        };
    };

    return (
        <form className={styles.filtro} onSubmit={setOnSubmit}>

            <select onChange={setOnSelect} ref={firstFilter}>
                <option value="0" defaultChecked>Escolha uma opção</option>
                <option value="região">Região</option>
                <option value="capital">Capital</option>
                <option value="lingua">Lingua</option>
                <option value="país">País</option>
                <option value="moeda">Moeda</option>
            </select>

            {displayFiltro !== null && (displayFiltro === 'região' ? filtroRegiao(secondFilter) : filtroTexto(displayFiltro, secondFilter))}

            <button type='submit'>PESQUISAR</button>
        </form>
    );
};

const filtroRegiao = (ref) => {
    return (
        <select ref={ref}>
            <option value="0" defaultChecked>Escolha uma Região</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
};

const filtroTexto = (value, ref) => {
    return (
        <input type="text" placeholder={`Digite um(a) ${value}`} ref={ref} />
    );
};

export default Filtro;
