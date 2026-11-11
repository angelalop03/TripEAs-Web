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
          <a href="#descargar">Descargar</a>
        </nav>
        <div className="header-actions">
          <a href="#descargar" className="btn-download-small">Descargar app</a>
        </div>
      </div>
    </header>
  )
}
