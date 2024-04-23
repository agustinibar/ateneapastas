import { useNavigate } from 'react-router-dom';
import styles from '../Landing/landing.module.css';
import backgroundVideo from '../../assets/backgroundPasta.mp4';

const Landing = () => {
    const navigate = useNavigate()

    const goHome = ()=>{
        navigate('/home')
    }
  return (
    <div className={styles.container}>
    <video autoPlay loop muted className={styles.backgroundVideo}>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={styles.content}>
      <h1 className={styles.title}>¡Bienvenido a Atenea!</h1>
      <p className={styles.description}>Descubre nuestra exquisita selección de pastas frescas y recetas caseras.</p>
      <button className={styles.button} onClick={goHome}>Conoce nuestros productos y cómo cocinarlos haciendo click AQUÍ</button>
    </div>
  </div>
  )
}

export default Landing;
