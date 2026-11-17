import { useState } from 'react';
import { E2_PROJECTS } from '../data/portfolioData';
import { GITHUB_REPOS_ENDPOINT } from '../services/githubService';
import { useFetchApi } from '../hooks/useFetchApi';
import type { GitHubRepo } from '../types';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { RepoCard } from '../components/RepoCard/RepoCard';
import { StatusMessage } from '../components/StatusMessage/StatusMessage';
import './ProjectsPage.css';

const FILTER_OPTIONS = ['Todos', 'HTML5 Semántico', 'JavaScript', 'WAI-ARIA'] as const;

export function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string>('Todos');
  const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(GITHUB_REPOS_ENDPOINT);

  const filteredProjects =
    selectedTech === 'Todos'
      ? E2_PROJECTS
      : E2_PROJECTS.filter((project) => project.technologies.includes(selectedTech));

  return (
    <>
      <section className="projects-section" aria-labelledby="titulo-proyectos">
        <header className="projects-section__header">
          <h2 id="titulo-proyectos" className="projects-section__title">
            Trabajos y Proyectos Destacados
          </h2>
        </header>

        <ul
          className="projects-section__filters"
          aria-label="Filtrar proyectos destacados por tecnología"
        >
          {FILTER_OPTIONS.map((tech) => (
            <li key={tech} className="projects-section__filter-item">
              <button
                type="button"
                className={
                  selectedTech === tech
                    ? 'projects-section__filter-btn projects-section__filter-btn--active'
                    : 'projects-section__filter-btn'
                }
                aria-pressed={selectedTech === tech}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </button>
            </li>
          ))}
        </ul>

        <ul className="projects-section__grid">
          {filteredProjects.map((project) => (
            <li key={project.id} className="projects-section__item">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="projects-section" aria-labelledby="titulo-repos-github">
        <header className="projects-section__header">
          <h2 id="titulo-repos-github" className="projects-section__title">
            Repositorios Públicos en GitHub (API REST)
          </h2>
        </header>

        {loading && (
          <StatusMessage
            variant="loading"
            message="Cargando repositorios públicos desde GitHub..."
          />
        )}

        {error && <StatusMessage variant="error" message={error} />}

        {!loading && !error && repos && (
          <ul className="projects-section__grid">
            {repos.map((repo) => (
              <li key={repo.id} className="projects-section__item">
                <RepoCard repo={repo} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}