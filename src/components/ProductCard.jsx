const rupiah = value => `Rp${value.toLocaleString("id-ID")}`;
export default function ProductCard({ product, onDetail }) {
  return (
    <article className="product-card" onClick={() => onDetail(product)}>
      <div className="product-image">
        <img src={product.img} alt={product.name}/>
        {product.id === 1 && <span className="badge">FAVORIT</span>}
      </div>
      <div className="product-body">
        <span className="category">{product.cat}</span>
        <h3>{product.name}</h3>
        <strong>{rupiah(product.price)}</strong>
      </div>
    </article>
  );
}