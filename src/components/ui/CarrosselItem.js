import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../css/carrosselItem.module.css';

function CarrosselItem(props) {
    const { flags, name } = props.pais;

    return (
        <Link to={`/pais/${name.common}`}>
            <div className={styles.bandeiraLink}>
                <img src={flags.png} alt={name.official} />
            </div>
        </Link>
    );
};

export default CarrosselItem;
