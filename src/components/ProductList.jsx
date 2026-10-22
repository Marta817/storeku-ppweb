import ProductCard from "./ProductCard";

export default function ProductList({ products, onDetail }) {
  if (products.length === 0) return <div className="empty-state">Belum ada data Produk</div>;
  
  return (
    <div className="product-grid">
      {products.map(product => <ProductCard key={product.id} product={product} onDetail={onDetail}/>)}
    </div>
  );
}