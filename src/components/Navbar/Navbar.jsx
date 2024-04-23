import styles from '../Navbar/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <div className={styles.left}>
      <span className={styles.brand}>Atenea</span>
    </div>
    <div className={styles.right}>
      <input type="text" placeholder="Buscar tu pasta favorita" className={styles.search} />
    </div>
  </nav>
  )
}

export default Navbar;