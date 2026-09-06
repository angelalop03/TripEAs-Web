export default function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="section-head">
        <span className="eyebrow-pill" style={{ background: '#fff', color: 'var(--teal-700)', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>Fácil y rápido</span>
        <h2>Así funciona TripEas</h2>
        <p>Empieza en 30 segundos sin necesidad de registros complicados.</p>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-top">
            <span className="step-num">01</span>
            <div className="step-icon" style={{ background: 'var(--yellow-300)' }}><svg width="24" height="16" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.5" stroke="#766D00" strokeWidth="1.8" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="#766D00" strokeWidth="1.8" strokeLinecap="round" /><path d="M18 8h4M20 6v4" stroke="#766D00" strokeWidth="1.8" strokeLinecap="round" /></svg></div>
          </div>
          <h3>Crea tu viaje</h3>
          <p>Ponle nombre a vuestra aventura, fechas y comparte el código o enlace mágico por WhatsApp. Vuestro grupo entra al instante sin formularios.</p>
          <div className="step-foot"><code>tripeas.app/join/ROAD-2025</code></div>
        </div>

        <div className="step-card">
          <div className="step-top">
            <span className="step-num">02</span>
            <div className="step-icon" style={{ background: 'var(--cyan-200)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 21v-3a4 4 0 014-4h4a4 4 0 014 4v3" stroke="#006878" strokeWidth="1.8" strokeLinecap="round" /><circle cx="10" cy="7" r="3.4" stroke="#006878" strokeWidth="1.8" /><path d="M17 4a4 4 0 010 8" stroke="#006878" strokeWidth="1.8" strokeLinecap="round" /></svg></div>
          </div>
          <h3>Organizadlo juntos</h3>
          <p>Añadid actividades, planes diarios, tickets de tren y listas de tareas. Todo se sincroniza en vivo en el móvil de cada integrante.</p>
          <div className="step-foot"><span className="dot"></span>4 miembros editando ahora mismo</div>
        </div>

        <div className="step-card">
          <div className="step-top">
            <span className="step-num">03</span>
            <div className="step-icon" style={{ background: 'var(--coral-50)' }}><svg width="21" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21s-8-5-8-11a5 5 0 018.9-3A5 5 0 0121 10c0 6-9 11-9 11z" stroke="#9E4039" strokeWidth="1.8" strokeLinejoin="round" /></svg></div>
          </div>
          <h3>¡Disfrutad del viaje!</h3>
          <p>Sin estrés de quién paga qué, con las reservas a mano y las decisiones resueltas. Vosotros solo preocupaos de crear recuerdos inolvidables.</p>
          <div className="step-foot filled">¡Paz mental al 100%! 🎉</div>
        </div>
      </div>
    </section>
  )
}
