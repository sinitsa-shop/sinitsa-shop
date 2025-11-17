import { useState } from "react";

const categories = [
  { id: "all",      name: "Все товары" },
  { id: "tshirts",  name: "Футболки" },
  { id: "polo",     name: "Поло" },
  { id: "shirts",   name: "Рубашки" },
  { id: "sweaters", name: "Свитера" },
  { id: "coats",    name: "Пальто" },
  { id: "jackets",  name: "Куртки" },
  { id: "leather",  name: "Кожаные куртки" },
  { id: "vests",    name: "Жилетки" },
  { id: "blazers",  name: "Пиджаки" },
  { id: "jeans",    name: "Джинсы" },
  { id: "trousers", name: "Брюки" },
  { id: "overalls", name: "Комбинезоны" },
];

// ТОВАРЫ (примеры)
// sizes — МАССИВ размеров, где лежат доступные размеры этого товара
const products = [
  {
    id: 1,
    name: "Винтажная лыжная куртка Sergio Tacchini (конец 80-х)",
    category: "jackets",
    sizes: ["L", "XL"],
    price: 8200,
    image: "/tacchini.jpg",
    description: "100% полиэстер, фурнитура VICLON YKK",
  },
  {
    id: 2,
    name: "Свитер Gjestal Exclusive",
    category: "sweaters",
    sizes: ["M"],
    price: 4880,
    image: "/Gjestal Exclusive2",
    description: "100% норвежская шерсть",
  },
  {
    id: 3,
    name: "Джинсы голубые mom fit",
    category: "jeans",
    sizes: ["M"],
    price: 1800,
    image: "",
    description: "",
  },
];

function App() {
  const [category, setCategory] = useState("all");   // выбранная категория
  const [sizeFilter, setSizeFilter] = useState("all"); // выбранный размер

  // ФИЛЬТРАЦИЯ ТОВАРОВ
  const visibleProducts = products.filter((p) => {
    // фильтр по категории
    const categoryOk = category === "all" || p.category === category;

    // фильтр по размеру
    const sizeOk =
      sizeFilter === "all" ||           // выбран "все размеры"
      !p.sizes ||                       // у товара нет размеров — показываем всегда
      p.sizes.includes(sizeFilter);     // массив размеров содержит выбранный

    return categoryOk && sizeOk;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <h2>🕊 Магазин Синица (секонд)</h2>

      {/* МЕНЮ КАТЕГОРИЙ */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: category === cat.id ? "#ffd280" : "#fff",
              cursor: "pointer",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ФИЛЬТР ПО РАЗМЕРУ */}
      <div style={{ marginTop: "20px" }}>
        <label>
          Размер:{" "}
          <select
            value={sizeFilter}
            onChange={(e) => setSizeFilter(e.target.value)}
            style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            <option value="all">Все размеры</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
            
          </select>
        </label>
      </div>

      {/* СПИСОК ТОВАРОВ */}
      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {visibleProducts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px 12px",
              background: "#fff",
            }}
          >
            {/* Название */}
            <div
              style={{
                fontWeight: 600,
                marginBottom: "6px",
                minHeight: "40px",
              }}
            >
              {p.name}
            </div>

            {/* Фото, если есть */}
            {p.image && (
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
            )}

            {/* Размеры */}
            {p.sizes && p.sizes.length > 0 && (
              <div>
                Размеры: <b>{p.sizes.join(", ")}</b>
              </div>
            )}

            {/* Состав / описание, если есть */}
            {p.description && (
              <div style={{ marginTop: "4px" }}>
                Состав: <b>{p.description}</b>
              </div>
            )}

            {/* Цена */}
            <div style={{ marginTop: "4px" }}>
              Цена: <b>{p.price} ₽</b>
            </div>

            {/* Категория */}
            <div
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "#777",
              }}
            >
              Категория:{" "}
              {categories.find((c) => c.id === p.category)?.name || p.category}
            </div>

            {/* Кнопка */}
            <button
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "none",
                background: "#ffd280",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              🧺 В корзину
            </button>
          </div>
        ))}

        {visibleProducts.length === 0 && (
          <div style={{ marginTop: "30px" }}>По выбранным фильтрам ничего не найдено 😢</div>
        )}
      </div>
    </div>
  );
}

export default App;