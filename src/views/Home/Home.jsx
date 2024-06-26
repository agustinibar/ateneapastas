import Navbar from "../../components/Navbar/Navbar";
import portada from '../../assets/portadaHome.jpg';
import styles from './home.module.css';
import Cards from "../../components/Cards/Cards";
import gnochis from '../../assets/gnochis.jpg';
import canelones from '../../assets/canelones2.jpg';
import sorrentinos from '../../assets/sorrentinos.webp';
import ravioles from '../../assets/ravioles.jpg';
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
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
      id: 3,
      name: "Tagliatele", 
      description: "Pasta larga y plana. Se elabora con harina de trigo y huevos frescos, lo que le confiere una textura sedosa y una excelente capacidad para absorber salsas. Es ideal para platos con salsas cremosas o a base de aceite de oliva y hierbas. Hierve agua con sal en una olla grande. Agrega los tagliatelles congelados y cocina durante unos 3-5 minutos o hasta que estén al dente.",
      imageUrl: "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
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

  return (
    <div>
    <Navbar />
    <div className={styles.cover}>
      <img src={portada} alt="Portada" className={styles.coverImage} />
    </div>
    
    <Cards products={productsData} />
    <AboutUs />
  </div>
  )
}

export default Home;
