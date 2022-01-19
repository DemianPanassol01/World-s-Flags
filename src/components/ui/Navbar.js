import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../css/navbar.module.css';
import { dispatchContext, flagsContext } from '../react/context';

function Navbar() {
    const { limparPesquisaDetalhada, limparPesquisa } = useContext(dispatchContext);
    const { resultado, selected } = useContext(flagsContext);
 
    return (
        <nav className={styles.navbar}>
            <h1>World's Flags</h1>

            {(resultado !== null && selected === null) && (
                <span onClick={() => limparPesquisa()}>
                    Limpar Pesquisa
                </span>
            )}

            {selected !== null && (
                <Link to='/' onClick={() => limparPesquisaDetalhada()}>
                    <i className="fas fa-arrow-left"></i> Voltar
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
