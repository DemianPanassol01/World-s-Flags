import React, { useContext } from 'react';

import spinner from './spinner.gif';
import styles from '../../css/loader.module.css';
import { flagsContext } from '../react/context';

function Loader() {
    const { loading } = useContext(flagsContext);

    return loading && <img src={spinner} alt="Carregando..." className={styles.spinner} />
};

export default Loader;
