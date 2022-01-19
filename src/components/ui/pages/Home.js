import React, { Fragment, useContext } from 'react';
import { flagsContext } from '../../react/context';
import Carrossel from '../Carrossel';
import ErrorMessage from '../ErrorMessage';
import Filtro from '../Filtro';

function Home() {
    const { resultado } = useContext(flagsContext);
    
    return (
        <Fragment>
            <ErrorMessage />
            <Filtro />
            {resultado !== null && <p style={{ textAlign: 'center' }}>Clique em uma bandeira para ver detalhes.</p>}
            <Carrossel resultado={resultado} />
        </Fragment>
    );
};

export default Home;
