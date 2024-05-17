import { useState } from 'react';
import styles from './cart.module.css';

const Cart = ({ selectedProducts, removeProduct}) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleDiscountChange = (e)=>{
        setDiscountCode(e.target.value);
    }
  
    const applyDiscount = ()=>{
        if(discountCode === "ATENEALOVERS"){
            setDiscount(0.3);
        } else{
            setDiscount(0);
        }
    };

    const total = selectedProducts.reduce((sum, product) => {
        const priceNumber = parseFloat(product.price.replace(/[^0-9.-]+/g, '').replace('.', '').replace(',', ','));
        return sum + priceNumber;
      }, 0);

    const discountedTotal = total * (1 - discount);

    return (
        <div className={styles.cartContainer}>
        <h3>Carrito de Compras</h3>
        <ul>
        {selectedProducts.length > 0 ? (
          selectedProducts.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <li>No hay productos en el carrito.</li>
        )}
      </ul>
        <div className={styles.total}>
          <p>Total: ${total.toFixed(2)}</p>
          {discount > 0 && <p>Descuento aplicado: -{(discount * 100).toFixed(0)}%</p>}
          <p>Total con Descuento: ${discountedTotal.toFixed(2)}</p>
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
