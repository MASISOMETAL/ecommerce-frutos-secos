"use client"

import { Suspense, useState } from "react"
import ProductList from "@/components/product-list"
import ProductFilter from "@/components/product-filter"
import styles from "./page.module.css"
// Sample product data - in a real app, this would come from an API or database

import { products } from "../data/products"

// export const metadata = {
//   title: "Productos - Frutos Secos",
//   description: "Explora nuestra selección de frutos secos y deshidratados",
// }

export default function ProductsPage() {

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros Productos</h1>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />
        </aside>

        <div className={styles.content}>
          <Suspense fallback={<div className={styles.loading}>Cargando productos...</div>}>
            <ProductList products={filteredProducts} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

