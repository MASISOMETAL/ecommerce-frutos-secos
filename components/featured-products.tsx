"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import styles from "./featured-products.module.css"

// Sample product data
const products = [
  {
    id: 1,
    name: "Nueces Peladas",
    price: 8.99,
    image: "/img/nueces-peladas.jpg?height=300&width=300",
    slug: "nueces-peladas",
    category: "nueces",
  },
  {
    id: 2,
    name: "Almendras Naturales",
    price: 7.5,
    image: "/img/almendras-naturales.jpg?height=300&width=300",
    slug: "almendras-naturales",
    category: "almendras",
  },
  {
    id: 3,
    name: "Mix de Frutos Secos",
    price: 9.99,
    image: "/img/mix-frutos-secos.jpg?height=300&width=300",
    slug: "mix-frutos-secos",
    category: "mix",
  },
  {
    id: 4,
    name: "Pistachos Tostados",
    price: 12.99,
    image: "/img/pistachos-tostados.jpg?height=300&width=300",
    slug: "pistachos-tostados",
    category: "pistachos",
  },
]

export default function FeaturedProducts() {
  const [addedToCart, setAddedToCart] = useState<number | null>(null)

  const handleAddToCart = (id: number) => {
    setAddedToCart(id)
    setTimeout(() => setAddedToCart(null), 2000)
    // Here you would add the actual cart functionality
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Productos Destacados</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <Link href={`/productos/${product.slug}`} className={styles.imageLink}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className={styles.image}
              />
            </Link>
            <div className={styles.content}>
              <Link href={`/productos/${product.slug}`} className={styles.name}>
                {product.name}
              </Link>
              <div className={styles.price}>${product.price.toFixed(2)}</div>
              <button
                className={`${styles.button} ${addedToCart === product.id ? styles.added : ""}`}
                onClick={() => handleAddToCart(product.id)}
              >
                {addedToCart === product.id ? (
                  "Añadido ✓"
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    Añadir al Carrito
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.viewAll}>
        <Link href="/productos" className={styles.viewAllLink}>
          Ver todos los productos
        </Link>
      </div>
    </section>
  )
}

