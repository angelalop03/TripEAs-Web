export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="badge-pill"><span className="dot"></span>Nuevo: instálala en tu móvil &amp; Ruleta de planes</span>
          <h1>Organizar un viaje en grupo nunca fue <span className="accent">tan fácil.</span></h1>
          <p className="hero-sub">Todo vuestro viaje. En un solo sitio.</p>
          <p className="body">Planificad, repartid gastos, compartid recuerdos y decidid juntos. TripEas reúne todo lo que necesitáis para disfrutar del viaje sin caos, sin fórmulas rotas ni chats infinitos.</p>
          <div className="hero-actions">
            <a className="store-btn teal" href="https://tripeas.vercel.app" target="_blank" rel="noopener noreferrer">
              <svg className="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#fff" strokeWidth="1.8" /><circle cx="12" cy="17.3" r="0.9" fill="#fff" /></svg>
              <span className="store-copy"><span className="eyebrow">Instalar en</span><span className="title">iPhone (Web)</span></span>
            </a>
            <a className="store-btn dark" href="https://expo.dev/artifacts/eas/SH_Nh3YTzG_zo9LCPQM961v6qIKLWCtsa7QNDgB4eek.apk">
              <svg className="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2.5 12 8l6-5.5M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v10A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              <span className="store-copy"><span className="eyebrow">Disponible en</span><span className="title">Android (APK)</span></span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-inner">
            <div className="glow-backdrop"></div>

            <div className="float-card fc-1">
              <div className="row">
                <span className="em">🍕</span>
                <span className="title">Cena Pizzería</span>
                <span className="amt">+3</span>
              </div>
              <p className="sub">hoy · 20:00h</p>
            </div>

            <div className="float-card fc-2">
              <div className="icon-round"><svg width="15" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 12.5 9 17.5 20 6.5" stroke="#006878" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div>
                <p className="title">Checklist grupo</p>
                <p className="sub">3 de 5 completado</p>
              </div>
            </div>

            <div className="float-card fc-3">
              <div className="row">
                <div className="icon-round"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#004E5B" strokeWidth="1.8" /><circle cx="12" cy="8" r="1.3" fill="#004E5B" /><circle cx="16" cy="13" r="1.3" fill="#004E5B" /><circle cx="8" cy="13" r="1.3" fill="#004E5B" /></svg></div>
                <div>
                  <p className="eyebrow">Ruleta TripEas</p>
                  <p className="title">¡Toca cala secreta!</p>
                </div>
              </div>
            </div>

            <div className="mascot">
              <img src={`${import.meta.env.BASE_URL}capibara.png`} alt="Mascota de TripEAs" width="100%" />
              <span className="mascot-bubble">¡Copia mi ruta! 🐹</span>
            </div>

            <div className="phone-shell">
              <div className="notch"><span></span><span></span></div>
              <div className="screen">
                <div className="screen-topbar">
                  <div>
                    <p className="eyebrow">Viaje activo</p>
                    <h3>Costa Brava 🏖️</h3>
                  </div>
                  <span className="days-chip">6 días</span>
                </div>

                <div className="facepile-row">
                  <div className="facepile">
                    <span className="fp" style={{ background: '#FFF176', color: '#766D00' }}>A</span>
                    <span className="fp" style={{ background: '#A8EDFF', color: '#001F25' }}>L</span>
                    <span className="fp" style={{ background: '#FFDAD6', color: '#410003' }}>M</span>
                    <span className="fp" style={{ background: '#C8E6FF', color: '#001E2E' }}>J</span>
                  </div>
                  <span className="more">+2 más</span>
                </div>

                <div className="balance-card">
                  <div>
                    <p className="eyebrow">Estás al día</p>
                    <p className="amount">+24,50 €</p>
                  </div>
                  <span className="pill-btn">Ver detalle</span>
                </div>

                <div className="activity-card">
                  <div className="icon-round"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2 3 21h18z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /></svg></div>
                  <div>
                    <p className="eyebrow">Próxima parada · 11:30</p>
                    <p className="title">Cala Aiguablava &amp; Snorkel</p>
                  </div>
                </div>

                <div className="mini-checklist">
                  <div className="row done"><span className="box"></span><span>Protector, paddle surf...</span></div>
                  <div className="row"><span className="box"></span><span>Llevar toallas de microfibra</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
