import Link from "next/link"
import Image from "next/image"
import styles from "./categories.module.css"

const categories = [
  { id: 1, name: "Nueces", image: "/img/cat-nueces.jpg?height=200&width=200", slug: "nueces" },
  { id: 2, name: "Almendras", image: "/img/cat-almendras.jpg?height=200&width=200", slug: "almendras" },
  { id: 3, name: "Pistachos", image: "/img/cat-pistachos.jpg?height=200&width=200", slug: "pistachos" },
  { id: 4, name: "Frutos Deshidratados", image: "/img/cat-frutos-des.jpg?height=200&width=200", slug: "frutos-deshidratados" },
]

export default function Categories() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Categorías</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link href={`/productos/categoria/${category.slug}`} key={category.id} className={styles.category}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className={styles.image}
              />
            </div>
            <h3 className={styles.categoryName}>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

