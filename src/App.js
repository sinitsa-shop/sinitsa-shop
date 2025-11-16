import { useState } from "react";

// КАТЕГОРИИ МАГАЗИНА
const categories = [
  { id: "all",       name: "Все товары" },
  { id: "tshirts",   name: "Футболки" },
  { id: "polo",      name: "Поло" },
  { id: "shirts",    name: "Рубашки" },
  { id: "sweaters",  name: "Свитера" },
  { id: "coats",     name: "Пальто" },
  { id: "jackets",   name: "Куртки" },
  { id: "leather",   name: "Кожаные куртки" },
  { id: "vests",     name: "Жилетки" },
  { id: "blazers",   name: "Пиджаки" },
  { id: "jeans",     name: "Джинсы" },
  { id: "trousers",  name: "Брюки" },
  { id: "overalls",  name: "Комбинезоны" }
];

// ТОВАРЫ (пока несколько примеров)
// потом будешь просто копировать объекты и менять данные
const products = [
  {
  id: 7,
  name: "Винтажная лыжная куртка Sergio Tacchini (конец 80-х)",
  category: "jackets",
  size: "50–52 (L–XL)",
  price: 8200,
  image: ["/tacchini.jpg", "/tacchini2.jpg"],
  description: "100% полиэстер, фурнитура VICLON YKK"
  },
  {
    id: 2,
    name: "Футболка белая basic",
    category: "tshirts",
    size: "M",
    price: 900
  },
  {
    id: 3,
    name: "Джинсы голубые mom fit",
    category: "jeans",
    size: "28/34",
    price: 1800
  }
];

function App() {
  const [category, setCategory] = useState("all");

  // какие товары показывать (фильтр по категории)
  const visibleProducts = products.filter(
    (p) => category === "all" || p.category === category
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🛍 Магазин Синица (секонд)</h2>

      {/* МЕНЮ КАТЕГОРИЙ */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginTop: "15px"
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: category === cat.id ? "#ffefcc" : "white",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* СПИСОК ТОВАРОВ */}
      <div style={{ marginTop: "25px" }}>
        {visibleProducts.length === 0 && (
          <div>В этой категории пока нет товаров 🙈</div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px"
          }}
        >
          {visibleProducts.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px 12px",
                background: "#fff"
              }}
            >
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "6px",
                  minHeight: "40px"
                }}
              >
                {p.name}
              </div>
{Array.isArray(p.image)
  ? p.image.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={p.name}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "10px",
          objectFit: "cover",
        }}
      />
    ))
  : (
      <img
        src={p.image}
        alt={p.name}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "10px",
          objectFit: "cover",
        }}
      />
    )
}
)}
              <div>Размер: <b>{p.size}</b></div>
              {p.description && (
  <div style={{ marginTop: "4px" }}>
    Состав: <b>{p.description}</b>
  </div>
)}
              <div style={{ marginTop: "4px" }}>
                Цена: <b>{p.price} ₽</b>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#777"
                }}
              >
                Категория:{" "}
                {categories.find((c) => c.id === p.category)?.name ||
                  p.category}
              </div>
              <button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#ffd280",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                В корзину
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;