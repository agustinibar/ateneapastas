import styles from './cart.module.css';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Cart = ({ selectedProducts, removeProduct }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [preferenceId, setPreferenceId] = useState(null);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      if (publicKey) {
          initMercadoPago(publicKey);
      }
  }, []);
    
    const handleDiscountChange = (e) => {
      setDiscountCode(e.target.value);
    }
    
    const applyDiscount = () => {
      if (discountCode === "PASTALOVERS") {
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
      return sum + (product.price * product.quantity);
    }, 0);
    
    
    const discountedTotal = total * (1 - discount);

    initMercadoPago(`${publicKey}`);

    const createPreference = async()=>{
      setLoading(true);
      try {
        const response = await axios.post(`https://apimercadopago.onrender.com/createorder`, {
          description: groupedProducts.map(product => `${product.quantity} x ${product.name}`).join(', '),
          price: discountedTotal.toFixed(2),
          quantity: 1,
          currency_id: "ARS"
      });
  
        const { id } = response.data;
        setLoading(false);
        return id;
      } catch (error) {
        setLoading(false);
        alert("Algo salio mal con mercado pago, por favor, escribenos por Whatsapp: +54 3487 729882");
        console.log(error)
      }
    };
    const handleMercadoPago = async()=>{
      const id = await createPreference();

      if(id){
        setPreferenceId(id)
      }
    
    };
    
    const handlePagoWhatsapp = ()=>{
      const productDetails = groupedProducts.map(product=> (`${product.quantity} x ${product.name} / ${product.price}`)).join(', ');

      const message = `Hola, me gustaría comprar los siguientes productos:  ${productDetails}. Por un total con descuento de: $${discountedTotal.toLocaleString()} ARS.`
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5493487729882?text=${encodedMessage}`

      window.open(whatsappUrl, 'blank')
    };

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
        </div>
        <input
          type="text"
          value={discountCode}
          onChange={handleDiscountChange}
          placeholder="Código de descuento"
          />
        <button onClick={applyDiscount}>Aplicar Descuento</button>
          {discount > 0 && <p>Descuento aplicado: -{(discount * 100).toFixed(0)}%</p>}
          <p>Total con Descuento: ${discountedTotal.toLocaleString()}</p>

          {loading ? (
          // Mostrar un esqueleto o un botón de carga mientras se realiza la solicitud
          <Skeleton width={200} height={40} />
        ) : preferenceId ? (
          <Wallet initialization={ {preferenceId: preferenceId} }/>
        ) : (
          <button onClick={handleMercadoPago} className={styles.mercadoPagoButton}>Pagar con Mercado Pago</button>
        )}
         <button onClick={handlePagoWhatsapp} className={styles.consultasWhat}>Consultar mas metodos de pago</button>
      </div>
    )
  }

export default Cart;
