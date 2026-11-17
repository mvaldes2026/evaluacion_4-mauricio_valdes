import perfilImg from '../assets/perfil.jpg';
import { PROFILE_DATA } from '../data/portfolioData';
import './HomePage.css';

export function HomePage() {
  return (
    <section className="about-section" aria-labelledby="titulo-sobre-mi">
      <header className="about-section__header">
        <h2 id="titulo-sobre-mi" className="about-section__title">
          Sobre mí
        </h2>
      </header>

      <figure className="about-section__content">
        <img
          src={perfilImg}
          alt={PROFILE_DATA.avatarAlt}
          className="about-section__avatar"
        />

        <figcaption className="about-section__bio">
          <p className="about-section__paragraph">
            ¡Hola! Soy Mauricio Valdés, estudiante de primer año de{' '}
            <strong>Ingeniería Civil en Informática</strong> en la Universidad Católica de Temuco.
          </p>
          <p className="about-section__paragraph">
            Este portafolio representa mis primeros pasos en el desarrollo web. Mi enfoque actual es
            crear interfaces web estructuradas, limpias y, sobre todo, <strong>accesibles</strong>{' '}
            para todos los usuarios. Me interesa el desarrollo de software sustentable y con
            pertinencia territorial.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}