export default function CtaFooter() {
  return (
    <div className="dark-block" id="descargar">
      <div className="cta">
        <span className="cta-badge">✈️ Disponible gratis para iPhone, Android y Web</span>
        <h2>Tu próximo viaje empieza aquí.</h2>
        <p>Descarga TripEas ahora y llevad toda la organización en el bolsillo. Gratis, sin suscripciones obligatorias y listo para viajar hoy mismo.</p>

        <div className="cta-actions">
          <a className="big-btn white" href="https://tripeas.vercel.app" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#00344D" strokeWidth="1.8" /><circle cx="12" cy="17.3" r="0.9" fill="#00344D" /></svg>
            Instalar en iPhone (Web)
          </a>
          <a className="big-btn teal" href="https://expo.dev/artifacts/eas/SH_Nh3YTzG_zo9LCPQM961v6qIKLWCtsa7QNDgB4eek.apk">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2.5 12 8l6-5.5M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v10A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            Descargar para Android
          </a>
        </div>

        <div className="web-cta">
          <p>¿Prefieres planificar tranquilamente desde el ordenador?</p>
          <a className="web-link" href="https://tripeas.vercel.app" target="_blank" rel="noopener noreferrer">Abrir TripEas Web →</a>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-cols">
          <div className="footer-about">
            <p>Viajar juntos. Organizarlo fácil. Olvídate de los chats grupales y diseña aventuras inolvidables con tu tribu.</p>
            <div className="footer-badges">
              <span>📱 iPhone (Web)</span>
              <span>🤖 Android</span>
              <span>🌐 Web App</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#funcionalidades">Funcionalidades</a></li>
              <li><a href="#descargar">Descargar</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Conéctate</h4>
            <p>Síguenos y descubre nuevos destinos comunitarios cada semana.</p>
            <div className="social-row">
              <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#F6FAFF" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="#F6FAFF" strokeWidth="1.8" /><circle cx="17.2" cy="6.8" r="1" fill="#F6FAFF" /></svg></a>
              <a href="#" aria-label="Comunidad" onClick={(e) => e.preventDefault()}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#F6FAFF" strokeWidth="1.8" /><circle cx="12" cy="8" r="3.4" stroke="#F6FAFF" strokeWidth="1.8" /></svg></a>
              <a href="#" aria-label="Soporte" onClick={(e) => e.preventDefault()}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v13H8l-4 4z" stroke="#F6FAFF" strokeWidth="1.8" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TripEas. Todos los derechos reservados.</span>
          <span className="with-icon">🌍 Hecho para viajar sin estrés con amigos y familia.</span>
        </div>
      </footer>
    </div>
  )
}
