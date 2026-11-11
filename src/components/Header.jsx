export default function Header() {
  return (
    <header className="site-header">
      <div className="header-row">
        <span className="logo">TripEAs</span>
        <nav className="nav-pill">
          <a href="#inicio" className="active">Inicio</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#instalar">Instalar</a>
        </nav>
        <div className="header-actions">
          <a href="#instalar" className="btn-download-small">Instalar app</a>
        </div>
      </div>
    </header>
  )
}
