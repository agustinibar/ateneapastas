import Navbar from "../../components/Navbar/Navbar";
import styles from './catalogo.module.css';
import gnochis from '../../assets/gnochis.jpg';
import canelones from '../../assets/canelones2.jpg';
import sorrentinos from '../../assets/sorrentinos.webp';
import ravioles from '../../assets/ravioles.jpg';

const productsData = [
  {
    id: 1,
    name: "Gnocchis",
    description: "Con una textura suave y ligeramente masticable. Tradicionalmente se sirven con una variedad de salsas, desde salsa de tomate hasta pesto. Se echan en el agua a punto de ebullición, sin descongelar y se cuentan de 5 a 6 minutos por reloj. Cuando el agua hierva nuevamente se debe bajar el fuego. Luego, colar",
    imageUrl: gnochis,
    isActive: true
  },
  {
    id: 2,
    name: "Ravioles",
    description: "Rellenos de una mezcla sabrosa de acelga, ricota y hierbas aromáticas. Su relleno fresco y saludable les otorga un sabor distintivo y una textura tierna. Se sirven con una variedad de salsas. Se cocinan 4 a 5 minutos a fuego suave. Se echan en la olla por plancha entera sin separar, con agua en punto de ebullición. Cuando el agua hierve nuevamente bajar el fuego. Se deben colar.",
    imageUrl: ravioles,
    isActive: true
  },
  {
    id: 4,
    name: "Sorrentinos",
    description: "De mayor tamaño y forma circular. Están rellenos con una mezcla cremosa de jamón y queso, lo que les otorga un sabor reconfortante y delicioso. Se suelen acompañar con salsas cremosas. Se cocinan de 5 a 6 minutos, fuego suave. Se echan en la olla, cuando el agua hierve, se baja el fuego y se cuentan 5 minutos por reloj manteniendo la olla destapada y cuidando que el agua no levante hervor nuevamente. Se retiran con espumadera y se recomienda servir en plato. Si están congelados el procedimiento es el mismo pero el lapso de cocción es de 8 a 9 minutos.",
    imageUrl: sorrentinos,
    isActive: true
  },
  {
    id: 5,
    name: "Canelones",
    description: "Tubos de pasta rellenos de una mezcla sabrosa de verduras cocidas, como acelgas, cebollas, y zanahorias, junto con una cremosa salsa bechamel. Están listos para calentar y servir. Se calientan 3 minutos en el microondas en la misma bandeja. En horno, se pueden calentar 10 minutos en una fuente, siempre junto a la salsa y el queso para gratinar.",
    imageUrl: canelones,
    isActive: true
  },
];
const Catalogo = () => {
  return (
    <>
      <Navbar/>
      <h3 className={styles.tittle}>Catalogo</h3>
      <div className={styles.catalogoContainer}>
        {productsData.map(product => (
          <div className={styles.card} key={product.id}>
            <img src={product.imageUrl} alt={product.name} className={styles.image} />
            <div className={styles.details}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Catalogo;