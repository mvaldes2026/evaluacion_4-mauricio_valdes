import { Link, NavLink } from 'react-router-dom';
import { PROFILE_DATA } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar__link navbar__link--active' : 'navbar__link';

  return (
    <header className="navbar">
      <h1 className="navbar__brand">
        <Link to="/" className="navbar__title">
          {PROFILE_DATA.name}
        </Link>
      </h1>

      <p className="navbar__subtitle">{PROFILE_DATA.role}</p>

      <nav className="navbar__nav" aria-label="Navegación principal del portafolio">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" end className={getNavLinkClass}>
              Sobre mí
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/proyectos" className={getNavLinkClass}>
              Proyectos
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contacto" className={getNavLinkClass}>
              Contacto
            </NavLink>
          </li>
          <li className="navbar__item">
            <button
              type="button"
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              aria-label={
                theme === 'light'
                  ? 'Activar modo oscuro'
                  : 'Activar modo claro territorial'
              }
            >
              {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}