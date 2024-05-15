import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../Navbar/navbar.module.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCatalogo, setIsCatalogo] = useState(true);

  const handleClickNavigate = ()=>{
    navigate('/catalogo')
  };

  const goHome = ()=>{
    navigate('/home')
  };

  useEffect(()=>{
    const isCatalogo = ()=>{
      if(location.pathname === '/catalogo'){
        setIsCatalogo(false)
      }
    };

    isCatalogo();

  },[]);

  return (
    <nav className={styles.navbar}>
    <div className={styles.left}>
      <span className={styles.brand} onClick={goHome}>Atenea</span>
    </div>
    <div className={styles.right}>
      {/* <input type="text" placeholder="Buscar tu pasta favorita" className={styles.search} /> */}
      {
        isCatalogo ? (
        <button className={styles.catalogo} onClick={handleClickNavigate}>Mira nuestro catalogo!</button>
        ) : (
          null
        )
      }
    </div>
  </nav>
  )
}

export default Navbar;