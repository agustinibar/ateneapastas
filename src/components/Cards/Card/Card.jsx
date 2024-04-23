import React from 'react';
import styles from '../Card/card.module.css';

const Card = ({ product }) => {
    const { name, description, imageUrl, isActive } = product;

    return (
        <div className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}>
            <img src={imageUrl} alt={name} className={styles.image} />
            <div className={styles.details}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.status}>{isActive ? 'Activo' : 'Inactivo'}</p>
            </div>
        </div>
    );
}

export default Card;
