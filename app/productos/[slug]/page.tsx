import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import styles from "./page.module.css"

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Nueces Peladas",
    price: 8.99,
    image: "/img/nueces-peladas.jpg?height=500&width=500",
    slug: "nueces-peladas",
    category: "nueces",
    description: "Nueces peladas de la mejor calidad, ricas en omega-3 y antioxidantes.",
    longDescription:
      "Nuestras nueces peladas son seleccionadas cuidadosamente para garantizar la mejor calidad. Son ricas en ácidos grasos omega-3, proteínas, fibra, vitaminas y minerales. Perfectas para consumir como snack saludable o para incorporar en tus recetas favoritas.",
    nutritionalInfo: {
      calories: "654 kcal",
      protein: "15.2 g",
      carbs: "13.7 g",
      fat: "65.2 g",
      fiber: "6.7 g",
    },
  },
  {
    id: 2,
    name: "Almendras Naturales",
    price: 7.5,
    image: "/img/almendras-naturales.jpg?height=500&width=500",
    slug: "almendras-naturales",
    category: "almendras",
    description: "Almendras naturales sin tostar, perfectas para snacks saludables o para preparar leche de almendras.",
    longDescription:
      "Nuestras almendras naturales son de cultivo sostenible y no han sido sometidas a ningún proceso de tostado. Conservan todo su sabor y propiedades nutricionales. Son una excelente fuente de proteínas, fibra, vitamina E y grasas saludables.",
    nutritionalInfo: {
      calories: "579 kcal",
      protein: "21.2 g",
      carbs: "21.7 g",
      fat: "49.9 g",
      fiber: "12.5 g",
    },
  },
  {
    id: 3,
    name: "Mix de Frutos Secos",
    price: 9.99,
    image: "/img/mix-frutos-secos.jpg?height=500&width=500",
    slug: "mix-frutos-secos",
    category: "mix",
    description: "Mezcla equilibrada de nueces, almendras, avellanas y pasas para un snack nutritivo.",
    longDescription:
      "Descubre el Mix de Frutos Secos Premium, una exquisita selección de los mejores frutos secos, ideal para cualquier momento del día. Perfecto para llevar contigo y disfrutar de un snack saludable y lleno de energía.",
    nutritionalInfo: {
      calories: "600 kcal",
      protein: "20 g",
      carbs: "22 g",
      fat: "50 g",
      fiber: "10.1 g",
    },
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no existe",
    }
  }

  return {
    title: `${product.name} - Frutos Secos`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Producto no encontrado</h1>
        <p>Lo sentimos, el producto que buscas no existe.</p>
        <Link href="/productos" className={styles.backLink}>
          <ArrowLeft size={16} />
          Volver a productos
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link href="/productos" className={styles.backLink}>
        <ArrowLeft size={16} />
        Volver a productos
      </Link>

      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.name}>{product.name}</h1>
          <div className={styles.price}>${product.price.toFixed(2)}</div>

          <div className={styles.description}>
            <p>{product.longDescription}</p>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <label htmlFor="quantity">Cantidad:</label>
              <select id="quantity" className={styles.select}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button className={styles.addToCart}>
              <ShoppingCart size={20} />
              Añadir al Carrito
            </button>
          </div>

          <div className={styles.nutritionalInfo}>
            <h3>Información Nutricional</h3>
            <p>Por cada 100g:</p>
            <ul>
              <li>
                <strong>Calorías:</strong> {product.nutritionalInfo.calories}
              </li>
              <li>
                <strong>Proteínas:</strong> {product.nutritionalInfo.protein}
              </li>
              <li>
                <strong>Carbohidratos:</strong> {product.nutritionalInfo.carbs}
              </li>
              <li>
                <strong>Grasas:</strong> {product.nutritionalInfo.fat}
              </li>
              <li>
                <strong>Fibra:</strong> {product.nutritionalInfo.fiber}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

