import { useMemo, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import OrderForm from "./components/OrderForm";
import Account from "./components/Account";
import { initialProducts } from "./data/product.js";
import "./style.css";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [active, setActive] = useState("home");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => 
    products.filter(p => `${p.name} ${p.cat}`.toLowerCase().includes(search.toLowerCase())), 
    [products, search]
  );

  const addProduct = product => setProducts(prev => [...prev, { ...product, id: Date.now() }]);

  const changePage = key => { 
    setActive(key); 
    setMenuOpen(false); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="app">
      <Header onMenu={() => setMenuOpen(!menuOpen)} />
      <Sidebar active={active} setActive={changePage} open={menuOpen}/>
      
      <main className="main">
        {active === "home" && (
          <>
            <section className="hero">
              <div>
                <span className="kicker">STOREKU • KOLEKSI PILIHAN</span>
                <h1>Temukan Gaya<br/>Favoritmu</h1>
                <p>Belanja mudah • Harga transparan • Produk pilihan</p>
                <button className="primary-btn" onClick={() => changePage("products")}>
                  Lihat Katalog Produk ({products.length})
                </button>
              </div>
              <img src={products[0]?.img} alt={products[0]?.name}/>
            </section>

            <section className="section-heading">
              <span className="kicker">KOLEKSI</span>
              <h2>Produk Pilihan</h2>
              <p>Data produk berasal dari state array React.</p>
            </section>

            <ProductList products={products.slice(0,4)} onDetail={setSelected}/>

            <div className="stats">
              <div><strong>{products.length}</strong><span>Total Produk</span></div>
              <div><strong>{new Set(products.map(p=>p.cat)).size}</strong><span>Kategori</span></div>
              <div><strong>✓</strong><span>React State</span></div>
            </div>
          </>
        )}

        {active === "products" && (
          <>
            <div className="section-heading">
              <span className="kicker">KATALOG</span>
              <h2>Semua Produk</h2>
              <p>Gunakan pencarian untuk memfilter data produk.</p>
            </div>
            <div className="search-box">
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari produk (tas, sepatu, kaos, jaket, dll)..."/>
              <span>{filteredProducts.length} produk</span>
            </div>
            <ProductList products={filteredProducts} onDetail={setSelected}/>
          </>
        )}

        {active === "promo" && (
          <>
            <div className="section-heading">
              <span className="kicker">PROMO</span>
              <h2>Pilihan Favorit</h2>
              <p>Beberapa produk pilihan Storeku.</p>
            </div>
            <ProductList products={products.slice(0,4)} onDetail={setSelected}/>
          </>
        )}

        {active === "order" && <OrderForm products={products}/>} 
        {active === "account" && <Account/>}
      </main>

      {selected && (
        <div className="modal-backdrop" onClick={()=>setSelected(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <button className="close" onClick={()=>setSelected(null)}>×</button>
            <img src={selected.img} alt={selected.name}/>
            <span className="category">{selected.cat}</span>
            <h2>{selected.name}</h2>
            <strong>Rp{selected.price.toLocaleString("id-ID")}</strong>
            <button className="primary-btn" onClick={()=>{setSelected(null);changePage("order")}}>
              Beli Sekarang
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
