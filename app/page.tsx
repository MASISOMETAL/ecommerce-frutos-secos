import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}

