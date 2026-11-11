const APP_URL = 'https://tripeas.vercel.app'

export default function InstallGuide() {
  return (
    <section className="section install" id="instalar">
      <div className="section-head">
        <span className="eyebrow-pill" style={{ background: 'var(--yellow-300)', color: 'var(--yellow-ink-strong)' }}>Sin tiendas de apps</span>
        <h2>Tenla en tu pantalla de inicio</h2>
        <p>TripEas se instala desde el navegador en unos segundos. Tendrás su icono junto al resto de tus apps y se abrirá a pantalla completa.</p>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-top">
            <h3>iPhone</h3>
            <div className="step-icon" style={{ background: 'var(--cyan-200)' }}><svg width="20" height="22" viewBox="0 0 24 24" fill="none"><rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke="#006878" strokeWidth="1.8" /><circle cx="12" cy="18" r="0.9" fill="#006878" /></svg></div>
          </div>
          <ol className="install-steps">
            <li>Abre <strong>tripeas.vercel.app</strong> en <strong>Safari</strong>.</li>
            <li>Toca el botón <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba).</li>
            <li>Elige <strong>Añadir a pantalla de inicio</strong> y confirma.</li>
          </ol>
          <a className="step-foot install-link" href={APP_URL} target="_blank" rel="noopener noreferrer">Abrir TripEas →</a>
        </div>

        <div className="step-card">
          <div className="step-top">
            <h3>Android</h3>
            <div className="step-icon" style={{ background: 'var(--yellow-300)' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2.5 12 8l6-5.5M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v10A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5z" stroke="#766D00" strokeWidth="1.6" strokeLinejoin="round" /></svg></div>
          </div>
          <ol className="install-steps">
            <li>Abre <strong>tripeas.vercel.app</strong> en <strong>Chrome</strong>.</li>
            <li>Toca el menú <strong>⋮</strong> de arriba a la derecha.</li>
            <li>Elige <strong>Instalar app</strong> o <strong>Añadir a pantalla de inicio</strong>.</li>
          </ol>
          <a className="step-foot install-link" href={APP_URL} target="_blank" rel="noopener noreferrer">Abrir TripEas →</a>
        </div>

        <div className="step-card">
          <div className="step-top">
            <h3>Ordenador</h3>
            <div className="step-icon" style={{ background: 'var(--coral-50)' }}><svg width="22" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="12" rx="2" stroke="#9E4039" strokeWidth="1.8" /><path d="M8 20h8M12 16v4" stroke="#9E4039" strokeWidth="1.8" strokeLinecap="round" /></svg></div>
          </div>
          <ol className="install-steps">
            <li>Abre <strong>tripeas.vercel.app</strong> en <strong>Chrome</strong> o <strong>Edge</strong>.</li>
            <li>Pulsa el icono de <strong>instalar</strong> que aparece en la barra de direcciones.</li>
            <li>Se abrirá en su propia ventana, como un programa más.</li>
          </ol>
          <a className="step-foot install-link" href={APP_URL} target="_blank" rel="noopener noreferrer">Abrir TripEas →</a>
        </div>
      </div>
    </section>
  )
}
