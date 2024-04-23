import React from 'react';
import Card from './Card/Card';
import styles from '../Cards/cards.module.css';

const Cards = ({ products }) => {
  return (
    <div className={styles.cardContainer}>
      {products ? (
        products.map(product => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        "Cargando..."
      )}
    </div>
  );
}

export default Cards;
