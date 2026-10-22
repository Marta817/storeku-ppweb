export default function Account() { 
  return (
    <section>
      <div className="section-heading">
        <span className="kicker">STOREKU</span>
        <h2>Akun Saya</h2>
        <p>Kelola profil dan informasi akun.</p>
      </div>
      
      <div className="account-card">
        <div className="avatar">MS</div>
        <div>
          <h3>Marta Safitri</h3>
          <p>0812-3456-7890 • marta@email.com</p>
        </div>
      </div>
      
      <div className="settings-card">
        <div>Ubah Profil & Alamat <span>›</span></div>
        <div>Kata Sandi & Keamanan <span>›</span></div>
        <div>Pusat Bantuan & Live Chat <span>›</span></div>
      </div>
    </section>
  ); 
}