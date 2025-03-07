import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Frutos Secos</h3>
            <p>La mejor selección de frutos secos y deshidratados para tu bienestar.</p>
          </div>

          <div className={styles.column}>
            <h4>Enlaces</h4>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/productos">Productos</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contacto</h4>
            <address>
              <p>Calle Principal 123</p>
              <p>Ciudad, País</p>
              <p>info@frutossecos.com</p>
              <p>+123 456 7890</p>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Frutos Secos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

