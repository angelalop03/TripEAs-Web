export default function Comparison() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow-pill" style={{ background: 'var(--cyan-300)', color: 'var(--teal-600)' }}>La evolución del viaje en grupo</span>
        <h2>Menos chats. Menos líos. Más viaje.</h2>
        <p>TripEas reúne en una sola aplicación todo lo que normalmente acabáis gestionando entre WhatsApps perdidos, hojas de cálculo rotas, capturas de pantalla y notas olvidadas.</p>
      </div>

      <div className="comparison-grid">
        <div className="compare-card before">
          <span className="compare-tag before">✕ Antes de TripEas: el caos</span>
          <div className="compare-item">
            <span className="ic rose"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v13H8l-4 4z" stroke="#9E4039" strokeWidth="1.8" strokeLinejoin="round" /></svg></span>
            <div className="txt"><strong>346 mensajes sin leer en WhatsApp</strong><span>"¿Alguien sabe a qué hora salía el tren del jueves?"</span></div>
          </div>
          <div className="compare-item">
            <span className="ic rose"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#9E4039" strokeWidth="1.8" /><path d="M4 10h16M10 4v16" stroke="#9E4039" strokeWidth="1.8" /></svg></span>
            <div className="txt"><strong>Excel con fórmula rota en celda B14</strong><span>Nadie sabe quién debe 350€ de los pagos a la compra grande</span></div>
          </div>
          <div className="compare-item">
            <span className="ic rose"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v13H4z" stroke="#9E4039" strokeWidth="1.8" /><path d="M4 6l8 6 8-6" stroke="#9E4039" strokeWidth="1.8" /></svg></span>
            <div className="txt"><strong>Billetes y QR perdidos en la bandeja de entrada</strong><span>Buscando el PDF del hotel en la puerta de embarque</span></div>
          </div>
        </div>

        <div className="compare-wand">
          <div className="wand-circle"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 19 19 5M15 5h4v4M9 19H5v-4" stroke="#4E4800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
          <p>Un clic y todo encaja</p>
        </div>

        <div className="compare-card after">
          <span className="compare-tag after">✓ Con TripEas: paz mental garantizada</span>
          <div className="compare-item">
            <span className="ic mint"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 12.5 9 17.5 20 6.5" stroke="#006878" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            <div className="txt"><strong>Cuentas saldadas en 1 toque</strong><span>Algoritmo inteligente de mínimos pagos con Split Money</span></div>
          </div>
          <div className="compare-item">
            <span className="ic sun"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="#766D00" strokeWidth="1.8" /><path d="M4 9.5h16M8 3v4M16 3v4" stroke="#766D00" strokeWidth="1.8" strokeLinecap="round" /></svg></span>
            <div className="txt"><strong>Itinerario colaborativo sincronizado</strong><span>Cada uno añade sus planes favoritos y quedan bajo control</span></div>
          </div>
          <div className="compare-item">
            <span className="ic mint"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 10V7a6 6 0 0112 0v3M5 10h14v10H5z" stroke="#006878" strokeWidth="1.8" strokeLinejoin="round" /></svg></span>
            <div className="txt"><strong>Bóveda de billetes compartida</strong><span>Reservas, vuelos y códigos QR a mano, incluso sin conexión en Android</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
