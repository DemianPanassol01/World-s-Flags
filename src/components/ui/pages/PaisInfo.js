import React, { Fragment, useContext, useEffect } from 'react';
import { dispatchContext, flagsContext } from '../../react/context';

import styles from '../../../css/paisInfo.module.css';
import Carrossel from '../Carrossel';

function PaisInfo({ match }) {

    const { selected } = useContext(flagsContext);
    const { pesquisaDetalhada } = useContext(dispatchContext);

    useEffect(() => {
        pesquisaDetalhada(match.params.contryName);

        //eslint-disable-next-line
    }, [match.params.contryName])

    return (
        selected !== null && (
            <Fragment>
                <section className={styles.container}>
                    <img src={selected.flags.png} alt={selected.name.official} />

                    <div className={styles.containerInfo}>
                        <p><strong>Nome:</strong> {selected.name.common}</p>
                        <p><strong>Capital:</strong> {selected.capital.join(', ')}</p>
                        <p><strong>Região:</strong> {selected.region}</p>
                        <p><strong>Sub-Região:</strong> {selected.subregion}</p>
                        <p><strong>População:</strong> {selected.population.toLocaleString('pt-BR')} Hab.</p>
                        <p><strong>Línguas:</strong> {transfLingua(selected.languages)}</p>
                        <p><strong>Nome(s) Nativos:</strong> {transfNative(selected.name.nativeName)}</p>
                    </div>
                </section>

                <section className={styles.containerCarrossel}>
                    {selected.borders.length === 0 ? <h4 style={{ textAlign: 'center' }}>Esse país não faz fronteira com nenhum outro país.</h4> : <h4>Países Vizinhos: </h4>}
                    <Carrossel resultado={selected.borders}/>
                </section>
            </Fragment>
        )
    );
};

const transfLingua = (object) => {
    let array = [];
    for (const key in object) {
        array.push(object[key])
    };

    return array.join(', ');
};

const transfNative = (object) => {
    let array = [];
    for (const key in object) {
        let name = `${object[key].common} (${key})`;
        array.push(name);
    };

    return array.join(', ');
};

export default PaisInfo;
