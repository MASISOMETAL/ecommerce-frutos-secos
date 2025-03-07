"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import styles from "./page.module.css"

// Sample cart data - in a real app, this would come from state management or localStorage
const initialCartItems = [
  {
    id: 1,
    name: "Nueces Peladas",
    price: 8.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
    slug: "nueces-peladas",
  },
  {
    id: 3,
    name: "Mix de Frutos Secos",
    price: 9.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
    slug: "mix-frutos-secos",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const calculateShipping = () => {
    const subtotal = calculateSubtotal()
    return subtotal > 50 ? 0 : 4.99
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping()
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <ShoppingBag size={64} />
        <h1>Tu carrito está vacío</h1>
        <p>Parece que aún no has añadido productos a tu carrito.</p>
        <Link href="/productos" className={styles.continueShoppingButton}>
          Explorar Productos
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tu Carrito</h1>

      <div className={styles.layout}>
        <div className={styles.cartItems}>
          <div className={styles.header}>
            <div className={styles.productHeader}>Producto</div>
            <div className={styles.priceHeader}>Precio</div>
            <div className={styles.quantityHeader}>Cantidad</div>
            <div className={styles.subtotalHeader}>Subtotal</div>
            <div className={styles.actionsHeader}></div>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.product}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <Link href={`/productos/${item.slug}`} className={styles.productName}>
                    {item.name}
                  </Link>
                </div>
              </div>

              <div className={styles.price}>${item.price.toFixed(2)}</div>

              <div className={styles.quantity}>
                <button
                  className={styles.quantityButton}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label="Disminuir cantidad"
                >
                  -
                </button>
                <span className={styles.quantityValue}>{item.quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>

              <div className={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</div>

              <div className={styles.actions}>
                <button
                  className={styles.removeButton}
                  onClick={() => removeItem(item.id)}
                  aria-label="Eliminar producto"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <div className={styles.continueShopping}>
            <Link href="/productos" className={styles.continueShoppingLink}>
              <ArrowLeft size={16} />
              Continuar Comprando
            </Link>
          </div>
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Resumen del Pedido</h2>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Envío</span>
            <span>{calculateShipping() === 0 ? "Gratis" : `$${calculateShipping().toFixed(2)}`}</span>
          </div>

          {calculateShipping() > 0 && (
            <div className={styles.shippingNote}>
              ¡Añade ${(50 - calculateSubtotal()).toFixed(2)} más para obtener envío gratis!
            </div>
          )}

          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

          <button className={styles.checkoutButton}>Proceder al Pago</button>

          <div className={styles.paymentMethods}>
            <p>Métodos de pago aceptados:</p>
            <div className={styles.paymentIcons}>
              {/* Aquí irían los iconos de métodos de pago */}
              Tarjetas, PayPal, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

