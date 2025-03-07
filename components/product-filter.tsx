"use client"

import type React from "react"

import { useState } from "react"
import styles from "./product-filter.module.css"

const categories = [
  { id: "nueces", name: "Nueces" },
  { id: "almendras", name: "Almendras" },
  { id: "pistachos", name: "Pistachos" },
  { id: "mix", name: "Mix de Frutos" },
  { id: "deshidratados", name: "Frutos Deshidratados" },
]

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState(20)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value))
  }

  const handleApplyFilters = () => {
    // Here you would implement the actual filtering logic
    console.log("Applying filters:", { priceRange, selectedCategories })
  }

  const handleResetFilters = () => {
    setPriceRange(20)
    setSelectedCategories([])
  }

  return (
    <div className={styles.filter}>
      <h3 className={styles.title}>Filtros</h3>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Categorías</h4>
        <div className={styles.categories}>
          {categories.map((category) => (
            <label key={category.id} className={styles.category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Precio máximo: ${priceRange}</h4>
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          value={priceRange}
          onChange={handlePriceChange}
          className={styles.priceRange}
        />
        <div className={styles.priceLabels}>
          <span>$0</span>
          <span>$50</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.applyButton} onClick={handleApplyFilters}>
          Aplicar Filtros
        </button>
        <button className={styles.resetButton} onClick={handleResetFilters}>
          Restablecer
        </button>
      </div>
    </div>
  )
}

