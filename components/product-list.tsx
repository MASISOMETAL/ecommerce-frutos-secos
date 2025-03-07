import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import styles from "./product-list.module.css"

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Nueces Peladas",
    price: 8.99,
    image: "/img/nueces-peladas.jpg?height=300&width=300",
    slug: "nueces-peladas",
    category: "nueces",
    description: "Nueces peladas de la mejor calidad, ricas en omega-3 y antioxidantes.",
  },
  {
    id: 2,
    name: "Almendras Naturales",
    price: 7.5,
    image: "/img/almendras-naturales.jpg?height=300&width=300",
    slug: "almendras-naturales",
    category: "almendras",
    description: "Almendras naturales sin tostar, perfectas para snacks saludables o para preparar leche de almendras.",
  },
  {
    id: 3,
    name: "Mix de Frutos Secos",
    price: 9.99,
    image: "/img/mix-frutos-secos.jpg?height=300&width=300",
    slug: "mix-frutos-secos",
    category: "mix",
    description: "Mezcla equilibrada de nueces, almendras, avellanas y pasas para un snack nutritivo.",
  },
  {
    id: 4,
    name: "Pistachos Tostados",
    price: 12.99,
    image: "/img/pistachos-tostados.jpg?height=300&width=300",
    slug: "pistachos-tostados",
    category: "pistachos",
    description: "Pistachos tostados con un toque de sal, perfectos para picar entre horas.",
  },
  {
    id: 5,
    name: "Avellanas",
    price: 10.5,
    image: "/img/avellanas.jpg?height=300&width=300",
    slug: "avellanas",
    category: "nueces",
    description: "Avellanas enteras de cultivo ecológico, ricas en vitamina E y minerales.",
  },
  {
    id: 6,
    name: "Pasas",
    price: 5.99,
    image: "/img/pasas.jpg?height=300&width=300",
    slug: "pasas",
    category: "deshidratados",
    description: "Pasas jugosas y dulces, ideales para postres o como snack energético.",
  },
  {
    id: 7,
    name: "Anacardos",
    price: 11.99,
    image: "/img/anacardos.jpg?height=300&width=300",
    slug: "anacardos",
    category: "nueces",
    description: "Anacardos de primera calidad, perfectos para aperitivos o para elaborar cremas vegetales.",
  },
  {
    id: 8,
    name: "Dátiles",
    price: 6.99,
    image: "/img/datiles.jpg?height=300&width=300",
    slug: "datiles",
    category: "deshidratados",
    description: 'Dátiles Medjool, conocidos como el "rey de los dátiles" por su tamaño y dulzura.',
  },
]

export default function ProductList() {
  return (
    <div className={styles.productList}>
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
            <p className={styles.description}>{product.description}</p>
            <div className={styles.price}>${product.price.toFixed(2)}</div>
            <button className={styles.button}>
              <ShoppingCart size={16} />
              Añadir al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

