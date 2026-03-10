import { useState } from 'react'

// ── Static product data ───────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 59.99 },
  { id: 2, name: 'Running Shoes',        category: 'Sports',      price: 89.99 },
  { id: 3, name: 'Coffee Maker',         category: 'Kitchen',     price: 45.00 },
  { id: 4, name: 'Yoga Mat',             category: 'Sports',      price: 25.00 },
  { id: 5, name: 'Desk Lamp',            category: 'Office',      price: 34.99 },
  { id: 6, name: 'Mechanical Keyboard',  category: 'Electronics', price: 110.00 },
  { id: 7, name: 'Water Bottle',         category: 'Sports',      price: 18.50 },
  { id: 8, name: 'Notebook Set',         category: 'Office',      price: 12.99 },
]

// ── Task 5: Single product card with hover highlight ─────────────────────────
function ProductCard({ product, layout }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`product-card${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="product-name">{product.name}</p>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  // Task 4: filter state
  const [filterText, setFilterText] = useState('')

  // Task 3: layout toggle state
  const [isGrid, setIsGrid] = useState(true)

  // Task 4: derive filtered list
  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div className="page">
      <h1>React Task 3 — Product List</h1>

      {/* Controls: filter input + layout toggle */}
      <div className="controls">
        {/* Task 4: filter input */}
        <input
          className="filter-input"
          type="text"
          placeholder="Filter by product name…"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />

        {/* Task 3: toggle layout button */}
        <button
          className="toggle-btn"
          onClick={() => setIsGrid((prev) => !prev)}
        >
          Switch to {isGrid ? 'List' : 'Grid'} View
        </button>
      </div>

      {/* Task 2: conditional empty message */}
      {filtered.length === 0 ? (
        <p className="empty">No products available</p>
      ) : (
        /* Task 1 & 3: map with stable keys + grid/list class */
        <div className={isGrid ? 'grid' : 'list'}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} layout={isGrid ? 'grid' : 'list'} />
          ))}
        </div>
      )}
    </div>
  )
}
