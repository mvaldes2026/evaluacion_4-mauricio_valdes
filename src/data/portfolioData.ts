import type { ProfileData, ProjectItem } from '../types';

export const PROFILE_DATA: ProfileData = {
  name: 'Mauricio Valdés',
  role: 'Estudiante de Ingeniería Civil en Informática',
  institution: 'Universidad Católica de Temuco',
  email: 'mvaldes2026@alu.uct.cl',
  avatarAlt: 'Fotografía de Mauricio Valdés sonriendo',
};

export const E2_PROJECTS: ProjectItem[] = [
  {
    id: 'cabanas-surval',
    title: 'Cabañas SurVal (Mockup Inmobiliario)',
    technologies: ['HTML5 Semántico', 'CSS3 Responsivo', 'WAI-ARIA'],
    description:
      'Diseño de interfaz para una plataforma de corretaje de propiedades enfocada en la Región de La Araucanía. El proyecto destacó por la integración de una paleta de colores territorial y un diseño completamente accesible para lectores de pantalla mediante roles ARIA y cumplimiento de las directrices WCAG 2.1 (Nivel AA).',
    repoUrl: 'https://github.com/mvaldes2026',
    repoAriaLabel: 'Ver código fuente del proyecto Cabañas SurVal en GitHub',
    featured: true,
  },
  {
    id: 'calculadora-limites',
    title: 'EID de Cálculo Básico - Calculadora de Límites',
    technologies: ['JavaScript', 'DOM', 'Algoritmia Matemática'],
    description:
      'Aplicación interactiva desarrollada para la asignatura de Cálculo Básico. Consiste en una herramienta web capaz de calcular, procesar y visualizar límites matemáticos, demostrando la integración práctica entre lógica de programación y cálculo diferencial.',
    repoUrl: 'https://github.com/mvaldes2026',
    repoAriaLabel: 'Ver código fuente de EID de Cálculo Básico en GitHub',
    featured: true,
  },
];