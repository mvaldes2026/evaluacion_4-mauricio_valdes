import { PROFILE_DATA } from '../../data/portfolioData';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <address className="footer__address">
        <p className="footer__text">
          <strong>{PROFILE_DATA.name}</strong>
        </p>
        <p className="footer__text">
          {PROFILE_DATA.institution} — Ingeniería Civil en Informática
        </p>
        <p className="footer__text">
          Contacto:{' '}
          <a className="footer__link" href={`mailto:${PROFILE_DATA.email}`}>
            {PROFILE_DATA.email}
          </a>
        </p>
      </address>
      <p className="footer__copy">
        <small>&copy; 2026. Proyecto Desarrollo de Frontend (ICINF1107).</small>
      </p>
    </footer>
  );
}