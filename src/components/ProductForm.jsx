import { useState } from "react";
export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", price: "", cat: "Pakaian", img: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { 
    e.preventDefault(); 
    if (!form.name || !form.price) return; 
    onAdd({ 
      ...form, 
      price: Number(form.price), 
      img: form.img || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop" 
    }); 
    setForm({ name: "", price: "", cat: "Pakaian", img: "" }); 
  };
  
  return (
    <section className="form-card">
      <div className="section-heading">
        <span className="kicker">DATA PRODUK</span>
        <h2>Tambah Produk</h2>
        <p>Form ini menggunakan controlled component untuk menambahkan produk baru.</p>
      </div>
      
      <form onSubmit={submit} className="product-form">
        <label>Nama Produk
          <input name="name" value={form.name} onChange={handleChange} placeholder="Contoh: Kaos Oversize" required/>
        </label>
        <label>Harga
          <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="129000" min="1" required/>
        </label>
        <label>Kategori
          <select name="cat" value={form.cat} onChange={handleChange}>
            <option>Pakaian</option>
            <option>Outerwear</option>
            <option>Sepatu</option>
            <option>Tas</option>
            <option>Aksesori</option>
          </select>
        </label>
        <label>URL Gambar
          <input name="img" value={form.img} onChange={handleChange} placeholder="Opsional"/>
        </label>
        <button className="primary-btn" type="submit">+ Tambah Produk</button>
      </form>
    </section>
  );
}