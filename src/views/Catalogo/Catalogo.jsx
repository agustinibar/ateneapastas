import Navbar from "../../components/Navbar/Navbar";
import styles from './catalogo.module.css';
import gnochis from '../../assets/gnochis.jpg';
import canelones from '../../assets/canelones2.jpg';
import sorrentinos from '../../assets/sorrentinos.webp';
import ravioles from '../../assets/ravioles.jpg';
import { useState } from "react";
import Cart from "../../components/Cart/Cart";

const productsData = [
  {
    id: 1,
    name: "Gnocchis",
    description: "Con una textura suave y ligeramente masticable. Tradicionalmente se sirven con una variedad de salsas, desde salsa de tomate hasta pesto. Se echan en el agua a punto de ebullición, sin descongelar y se cuentan de 5 a 6 minutos por reloj. Cuando el agua hierva nuevamente se debe bajar el fuego. Luego, colar",
    imageUrl: gnochis,
    isActive: true,
    price:"$1.500 x kg"
  },
  {
    id: 2,
    name: "Ravioles",
    description: "Rellenos de una mezcla sabrosa de acelga, ricota y hierbas aromáticas. Su relleno fresco y saludable les otorga un sabor distintivo y una textura tierna. Se sirven con una variedad de salsas. Se cocinan 4 a 5 minutos a fuego suave. Se echan en la olla por plancha entera sin separar, con agua en punto de ebullición. Cuando el agua hierve nuevamente bajar el fuego. Se deben colar.",
    imageUrl: ravioles,
    isActive: true,
    price:"$3.350 x 8 unidades"
  },
  {
    id: 3,
    name: "Tagliatele", 
    description: "Pasta larga y plana. Se elabora con harina de trigo y huevos frescos, lo que le confiere una textura sedosa y una excelente capacidad para absorber salsas. Es ideal para platos con salsas cremosas o a base de aceite de oliva y hierbas. Hierve agua con sal en una olla grande. Agrega los tagliatelles congelados y cocina durante unos 3-5 minutos o hasta que estén al dente.",
    imageUrl: "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
    isActive: true,
    price:"$1.500 x kg"
  },
  {
    id: 4,
    name: "Sorrentinos j & q",
    description: "De mayor tamaño y forma circular. Están rellenos con una mezcla cremosa de jamón y queso, lo que les otorga un sabor reconfortante y delicioso. Se suelen acompañar con salsas cremosas. Se cocinan de 5 a 6 minutos, fuego suave. Se echan en la olla, cuando el agua hierve, se baja el fuego y se cuentan 5 minutos por reloj manteniendo la olla destapada y cuidando que el agua no levante hervor nuevamente. Se retiran con espumadera y se recomienda servir en plato. Si están congelados el procedimiento es el mismo pero el lapso de cocción es de 8 a 9 minutos.",
    imageUrl: sorrentinos,
    isActive: true,
    price:"$2.650 x 8 unidades"
  },
  {
    id: 5,
    name: "Canelones",
    description: "Tubos de pasta rellenos de una mezcla sabrosa de verduras cocidas, como acelgas, cebollas, y zanahorias, junto con una cremosa salsa bechamel. Están listos para calentar y servir. Se calientan 3 minutos en el microondas en la misma bandeja. En horno, se pueden calentar 10 minutos en una fuente, siempre junto a la salsa y el queso para gratinar.",
    imageUrl: canelones,
    isActive: true,
    price:"$3.350 x porcion"
  },
];
const Catalogo = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [selectedProducts, setSelectedProduct] = useState([]);

  const handleCardClick = (productId) => {
    if (flippedCards.includes(productId)) {
      setFlippedCards(flippedCards.filter(id => id !== productId));
    } else {
      setFlippedCards([...flippedCards, productId]);
    }
  };

  const addProduct = (e, product)=>{
    e.stopPropagation();
    setSelectedProduct([...selectedProducts, product])
  }

  const removeProduct = (productId)=>{
    setSelectedProduct(selectedProducts.filter(product => product.id !== productId))
  }
  return (
    <>
      <Navbar />
      <h3 className={styles.title}>Catalogo</h3>
      <div className={styles.catalogoContainer}>
        <div className={styles.cartContainer}>
          <Cart selectedProducts={selectedProducts} removeProduct={removeProduct}/>
        </div>
        <div className={styles.cardsContainer}>
          {productsData.map(product => (
            <div className={`${styles.card} ${flippedCards.includes(product.id) ? styles.flipped : ''}`} key={product.id} onClick={() => handleCardClick(product.id)}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img src={product.imageUrl} alt={product.name} className={styles.image} />
                  <div className={styles.details}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <button onClick={(e) => addProduct(e, product)}>Agregar al Carrito</button>
                    <button onClick={() => handleCardClick(product.id)}>Ver detalles</button>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <p className={styles.price}>{product.price}</p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogo;