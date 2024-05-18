import { useState } from 'react';
import styles from './cart.module.css';

const Cart = ({ selectedProducts, removeProduct }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
  
    const handleDiscountChange = (e) => {
      setDiscountCode(e.target.value);
    }
  
    const applyDiscount = () => {
      if (discountCode === "ATENEALOVERS") {
        setDiscount(0.3);
      } else {
        setDiscount(0);
      }
    };
  
    const groupedProducts = selectedProducts.reduce((acc, product) => {
      const existingProduct = acc.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, []);
  
    const total = groupedProducts.reduce((sum, product) => {
      const priceNumber = parseInt(product.price.replace(/[^0-9]+/g, ''));
      return sum + (priceNumber * product.quantity);
    }, 0);
  
    const discountedTotal = total * (1 - discount);
  
    return (
      <div className={styles.cartContainer}>
        <h3>Carrito de Compras</h3>
        <ul>
          {groupedProducts.length > 0 ? (
            groupedProducts.map(product => (
              <li key={product.id}>
                {product.quantity} x {product.name} - {product.price}
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
              </li>
            ))
          ) : (
            <li>No hay productos en el carrito.</li>
          )}
        </ul>
        <div className={styles.total}>
          <p>Total: ${total.toLocaleString()}</p>
          {discount > 0 && <p>Descuento aplicado: -{(discount * 100).toFixed(0)}%</p>}
          <p>Total con Descuento: ${discountedTotal.toLocaleString()}</p>
        </div>
        <input
          type="text"
          value={discountCode}
          onChange={handleDiscountChange}
          placeholder="Código de descuento"
        />
        <button onClick={applyDiscount}>Aplicar Descuento</button>
      </div>
    )
  } 

export default Cart;
