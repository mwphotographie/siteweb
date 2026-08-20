export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <p className="footer__brand">Argentique — Lou Berthier</p>
        <p className="footer__meta">Grenoble, France · disponible pour reportages &amp; portraits</p>
      </div>
      <div className="footer__row">
        <div className="footer__links">
          <a href="mailto:contact@argentique-studio.fr">contact@argentique-studio.fr</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="footer__meta">© {new Date().getFullYear()} — tous droits réservés</p>
      </div>
    </footer>
  )
}
