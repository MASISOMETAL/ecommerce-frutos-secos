import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import styles from "./product-list.module.css"

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  slug: string;
  image: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
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

