export default function Header({ onMenu }) {
  return (
    <header className="topbar">
      <button className="menu-btn" onClick={onMenu}>☰</button>
      <div className="logo">STOREKU<span>.</span></div>
      <div className="topbar-note">Toko Fashion Pilihan</div>
    </header>
  );
}