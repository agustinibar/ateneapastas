import Navbar from "../../components/Navbar/Navbar";
import portada from '../../assets/portadaHome.jpg';
import styles from './home.module.css';
import Cards from "../../components/Cards/Cards";
import gnochis from '../../assets/gnochis.jpg';
import canelones from '../../assets/canelones.jpg';
import sorrentinos from '../../assets/sorrentinos.jpg';
import ravioles from '../../assets/ravioles.jpg';

const Home = () => {
  const productsData = [
    {
      id: 1,
      name: "Gnocchis",
      description: "Con una textura suave y ligeramente masticable. Tradicionalmente se sirven con una variedad de salsas, desde salsa de tomate hasta pesto.",
      imageUrl: gnochis,
      isActive: true
    },
    {
      id: 2,
      name: "Ravioles",
      description: "Rellenos de una mezcla sabrosa de acelga, ricota y hierbas aromáticas. Su relleno fresco y saludable les otorga un sabor distintivo y una textura tierna. Se sirven con una variedad de salsas",
      imageUrl: ravioles,
      isActive: true
    },
    {
      id: 3,
      name: "Tagliatele", 
      description: "Pasta larga y plana. Se elabora con harina de trigo y huevos frescos, lo que le confiere una textura sedosa y una excelente capacidad para absorber salsas. Es ideal para platos con salsas cremosas o a base de aceite de oliva y hierbas.",
      imageUrl: "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
      isActive: true
    },
    {
      id: 4,
      name: "Sorrentinos",
      description: "De mayor tamaño y forma circular. Están rellenos con una mezcla cremosa de jamón y queso, lo que les otorga un sabor reconfortante y delicioso. Se suelen acompañar con salsas cremosas",
      imageUrl: sorrentinos,
      isActive: true
    },
    {
      id: 5,
      name: "Canelones",
      description: "Tubos de pasta rellenos de una mezcla sabrosa de verduras cocidas, como acelgas, cebollas, y zanahorias, junto con una cremosa salsa bechamel.",
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
  </div>
  )
}

export default Home;
