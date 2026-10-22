import {
  House,
  ShoppingBasket,
  TicketPercent,
  ClipboardList,
  CircleUserRound,
} from "lucide-react";

const menus = [
  { icon: House, label: "Beranda", key: "home" },
  { icon: ShoppingBasket, label: "Produk", key: "products" },
  { icon: TicketPercent, label: "Promo", key: "promo" },
  { icon: ClipboardList, label: "Pemesanan", key: "order" },
  { icon: CircleUserRound, label: "Akun", key: "account" },
];

export default function Sidebar({ active, setActive, open }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-title">MENU STOREKU</div>
      {menus.map(({ icon: Icon, label, key }) => (
        <button
          key={key}
          className={active === key ? "active" : ""}
          onClick={() => setActive(key)}
        >
          <span><Icon size={18} strokeWidth={1.8} /></span>
          {label}
        </button>
      ))}
    </aside>
  );
}
