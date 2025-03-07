import Link from "next/link"
import Image from "next/image"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Frutos Secos de la Mejor Calidad</h1>
        <p>Descubre nuestra selección premium de frutos secos naturales, sin conservantes ni aditivos.</p>
        <Link href="/productos" className={styles.button}>
          Ver Productos
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/img/frutos-secos.jpg?height=500&width=600"
          alt="Variedad de frutos secos"
          width={600}
          height={500}
          className={styles.image}
          priority
        />
      </div>
    </section>
  )
}

