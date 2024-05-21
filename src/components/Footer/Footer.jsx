import styles from '../Footer/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Información de Contacto</h4>
          <p>Teléfono: (54) 3487 - 729882</p>
          <p>Email: ateneapastas@gmail.com</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Horario de Atención</h4>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábado: 9:00 AM - 1:00 PM</p>
          <p>Domingo: Solo envios</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Síguenos en Redes Sociales</h4>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/profile.php?id=61558567293402">Facebook</a>
            <a href="https://www.instagram.com/ateneapastas/">Instagram</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Atenea Pastas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;