import type { GitHubRepo } from '../../types';
import './RepoCard.css';

interface RepoCardProps {
  repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <article className="repo-card" aria-labelledby={`repo-${repo.id}-titulo`}>
      <header className="repo-card__header">
        <h3 id={`repo-${repo.id}-titulo`} className="repo-card__title">
          {repo.name}
        </h3>
        <small className="repo-card__badge">
          {repo.language ?? 'Markdown / Docs'}
        </small>
      </header>

      <p className="repo-card__description">
        {repo.description ?? 'Repositorio académico de desarrollo en GitHub.'}
      </p>

      <dl className="repo-card__meta">
        <dt className="repo-card__meta-label">Estrellas:</dt>
        <dd className="repo-card__meta-value">{repo.stargazers_count}</dd>

        <dt className="repo-card__meta-label">Actualizado:</dt>
        <dd className="repo-card__meta-value">
          <time dateTime={repo.updated_at}>
            {new Date(repo.updated_at).toLocaleDateString('es-CL')}
          </time>
        </dd>
      </dl>

      <footer className="repo-card__footer">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-card__link"
          aria-label={`Abrir repositorio ${repo.name} en GitHub`}
        >
          Ver en GitHub
        </a>
      </footer>
    </article>
  );
}