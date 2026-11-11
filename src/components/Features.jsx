export default function Features() {
  return (
    <section className="section features" id="funcionalidades">
      <div className="section-head">
        <span className="eyebrow-pill" style={{ background: 'rgba(122,230,255,0.5)', color: 'var(--teal-600)' }}>Funcionalidades hechas con cariño</span>
        <h2>Un viaje. Una app. Todo organizado.</h2>
        <p>Diseñado para amigos, familias y aventureros que quieren disfrutar juntos sin discusiones de dinero ni pérdida de tiempo.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon" style={{ background: 'var(--cyan-200)' }}><svg width="24" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="14" rx="2" stroke="#006878" strokeWidth="1.8" /><path d="M2 10h20M16 14h3" stroke="#006878" strokeWidth="1.8" strokeLinecap="round" /><path d="M6 6V5a3 3 0 013-3h6a3 3 0 013 3v1" stroke="#006878" strokeWidth="1.8" /></svg></div>
            <span className="feature-tag" style={{ background: 'rgba(168,237,255,0.5)', color: 'var(--teal-700)' }}>Cero deudas</span>
          </div>
          <h3>Gastos compartidos</h3>
          <p>Registra quién paga, cuánto y entre quiénes se reparte. TripEas calcula automáticamente la forma más corta de saldar cuentas entre todos.</p>
          <div className="feature-visual">
            <div className="left"><span className="chip" style={{ background: 'var(--yellow-300)', color: 'var(--yellow-ink)' }}>A</span>Capy calculando…</div>
            <span className="right">Split listo</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon" style={{ background: 'var(--yellow-300)' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="2" stroke="#766D00" strokeWidth="1.8" /><path d="M3 9h18M8 2v4M16 2v4" stroke="#766D00" strokeWidth="1.8" strokeLinecap="round" /></svg></div>
            <span className="feature-tag" style={{ background: 'rgba(255,241,118,0.4)', color: 'var(--yellow-ink-strong)' }}>Día a día</span>
          </div>
          <h3>Calendario &amp; Ruta</h3>
          <p>Organizad actividades y planes hora a hora. Votad horarios, añadid ubicaciones de Google Maps y mantened todo el itinerario bajo control.</p>
          <div className="feature-visual">
            <span className="left">10:00 · Calas vígenes</span>
            <span className="right done">Confirmado</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon" style={{ background: 'var(--cyan-300)' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12.5 10 17.5 21 6.5" stroke="#006777" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <span className="feature-tag" style={{ background: 'rgba(122,230,255,0.4)', color: 'var(--teal-600)' }}>Colaborativo</span>
          </div>
          <h3>Listas &amp; Maletas</h3>
          <p>Maletas, tareas previas, compras de supermercado… cread checklists en vivo con responsables asignados para no olvidar nada.</p>
          <div className="feature-visual">
            <span className="left">Botiquín &amp; altavoz JBL</span>
            <span className="right">Asignado a Lucas</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon" style={{ background: 'var(--coral-50)' }}><svg width="20" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v15H6z" stroke="#9E4039" strokeWidth="1.8" strokeLinejoin="round" /><path d="M15 2v5h5" stroke="#9E4039" strokeWidth="1.8" strokeLinejoin="round" /></svg></div>
            <span className="feature-tag" style={{ background: 'var(--coral-50)', color: 'var(--coral-ink-strong)' }}>Offline en Android</span>
          </div>
          <h3>Bóveda de Documentos</h3>
          <p>Guardad billetes de avión, reservas de hotel, seguros de viaje y pases turísticos en un solo lugar protegido con lector de códigos QR.</p>
          <div className="feature-visual">
            <span className="left">Vuelo VY2431 (4 pasajeros)</span>
            <span className="right">QR disponible</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon" style={{ background: 'var(--yellow-400)' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="15" rx="2" stroke="#1F1C00" strokeWidth="1.8" /><circle cx="8.5" cy="9.5" r="1.6" fill="#1F1C00" /><path d="M3 16l5-5 4 4 3-3 6 6" stroke="#1F1C00" strokeWidth="1.8" strokeLinejoin="round" /></svg></div>
            <span className="feature-tag" style={{ background: 'rgba(243,229,108,0.5)', color: 'var(--yellow-ink-strong)' }}>Sin perder calidad</span>
          </div>
          <h3>Álbum Compartido</h3>
          <p>Todas las fotos y vídeos del grupo en resolución original, ordenadas automáticamente por días y lugares. Olvídate de pedir fotos por meses.</p>
          <div className="feature-visual">
            <span className="left">248 fotos subidas</span>
            <span className="right">Descarga en 1 clic</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-top">
            <div className="feature-icon" style={{ background: 'var(--cyan-400)' }}><svg width="21" height="21" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#004E5B" strokeWidth="1.8" /><circle cx="12" cy="8" r="1.3" fill="#004E5B" /><circle cx="16" cy="13" r="1.3" fill="#004E5B" /><circle cx="8" cy="13" r="1.3" fill="#004E5B" /><circle cx="12" cy="16.5" r="1.3" fill="#004E5B" /></svg></div>
            <span className="feature-tag" style={{ background: 'rgba(103,213,237,0.4)', color: 'var(--ink-deep)' }}>Diversión</span>
          </div>
          <h3>Ruleta &amp; Votaciones</h3>
          <p>¿Playa o senderismo? ¿Quién compra el pan hoy? Haced encuestas express o devolvedle la emoción al azar con la Ruleta TripEas.</p>
          <div className="feature-visual">
            <span className="left">¿Quién conduce?</span>
            <span className="right">¡Lucas elegido! 🎉</span>
          </div>
        </div>
      </div>
    </section>
  )
}
