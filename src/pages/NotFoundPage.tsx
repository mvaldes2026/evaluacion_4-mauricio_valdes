import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="titulo-404">
      <header className="not-found__header">
        <h2 id="titulo-404" className="not-found__title">
          404 — Página no encontrada
        </h2>
      </header>
      <p className="not-found__description">
        La ruta solicitada no existe dentro de este portafolio.
      </p>
      <Link to="/" className="not-found__link">
        Volver a Sobre mí
      </Link>
    </section>
  );
}