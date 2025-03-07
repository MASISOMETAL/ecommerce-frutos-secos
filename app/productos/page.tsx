import { Suspense } from "react"
import ProductList from "@/components/product-list"
import ProductFilter from "@/components/product-filter"
import styles from "./page.module.css"

export const metadata = {
  title: "Productos - Frutos Secos",
  description: "Explora nuestra selección de frutos secos y deshidratados",
}

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros Productos</h1>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <ProductFilter />
        </aside>

        <div className={styles.content}>
          <Suspense fallback={<div className={styles.loading}>Cargando productos...</div>}>
            <ProductList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

