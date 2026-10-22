import { useState } from "react";
export default function OrderForm({ products }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nama:"", email:"", telepon:"", produk:"", alamat:"" });
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };
  return (
    <section className="form-card">
      <div className="section-heading"><span className="kicker">PEMESANAN</span><h2>Form Pemesanan Baru</h2><p>Data pemesanan dikelola melalui state React.</p></div>
      {sent ? <div className="success-box">✓ Pesanan berhasil dikirim! Terima kasih telah berbelanja di Storeku.</div> : <form onSubmit={submit} className="product-form">
        <label>Nama Lengkap<input name="nama" value={form.nama} onChange={change} required/></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={change} required/></label>
        <label>No. Telepon / WA<input name="telepon" value={form.telepon} onChange={change} required/></label>
        <label>Pilih Produk<select name="produk" value={form.produk} onChange={change} required><option value="">-- Pilih Produk --</option>{products.map(p => <option key={p.id}>{p.name}</option>)}</select></label>
        <label>Alamat Lengkap Pengiriman<textarea name="alamat" value={form.alamat} onChange={change} rows="3" required/></label>
        <button className="primary-btn" type="submit">Kirim Pesanan Sekarang</button>
      </form>}
    </section>
  );
}