import type { ProjectItem } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={
        project.featured ? 'project-card project-card--featured' : 'project-card'
      }
      aria-labelledby={`proyecto-${project.id}-titulo`}
    >
      <header className="project-card__header">
        <h3 id={`proyecto-${project.id}-titulo`} className="project-card__title">
          {project.title}
        </h3>
        <p className="project-card__tech">
          <strong>Tecnologías:</strong> {project.technologies.join(', ')}.
        </p>
      </header>

      <p className="project-card__description">{project.description}</p>

      <footer className="project-card__footer">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
          aria-label={project.repoAriaLabel}
        >
          Ver Repositorio
        </a>
      </footer>
    </article>
  );
}