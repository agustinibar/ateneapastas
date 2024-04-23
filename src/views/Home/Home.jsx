import Navbar from "../../components/Navbar/Navbar";
import portada from '../../assets/portadaHome.jpg';
import styles from './home.module.css';
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const productsData = [
    {
      id: 1,
      name: "Producto",
      description: "Descripción del Producto 1",
      imageUrl: "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
      isActive: true
    },
    {
      id: 2,
      name: "Producto",
      description: "Descripción del Producto 2",
      imageUrl: "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
      isActive: false
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
