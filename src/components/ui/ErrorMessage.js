import React, { useContext } from 'react';
import { dispatchContext, flagsContext } from '../react/context';

import styles from '../../css/error.module.css';

function ErrorMessage() {
    const { error } = useContext(flagsContext);
    const { clearError } = useContext(dispatchContext);

    return (
        error !== null && (
            <div className={styles.container}>
                <p>{error}</p>
                <i onClick={() => clearError()} className="fas fa-times"></i>
            </div>
        )
    )
}

export default ErrorMessage;
