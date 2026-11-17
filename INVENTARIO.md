# Inventario Técnico y Trazabilidad de Migración (E2 → React SPA)

**Asignatura:** Desarrollo de Frontend (ICINF1107) — Evaluación N°4 (PIF)  
**Estudiante:** Mauricio Valdés  
**Repositorio E4 (Actual):** `evaluacion_4-mauricio_valdes`  
**Repositorio E2 (Evidencia Original):** https://github.com/mvaldes2026/mvaldes2026-portafolio-frontend  
**Evidencia Visual de Referencia:** [`docs/captura-e2.png`](docs/captura-e2.png)

---

## 1. Mapeo de Estructura, Estilos y Funcionalidad (E2 → E4)

| Elemento en Evaluación N°2 | Origen en E2 | Destino en Evaluación N°4 (React + TS) | Estado |
| :--- | :--- | :--- | :--- |
| Enlace de salto rápido (`Saltar al contenido principal`) | `index.html` (`a.sr-only`) | `src/App.tsx` (`a.skip-link`) + `src/index.css` | Conservado y estandarizado |
| Encabezado institucional y barra de navegación | `index.html` (`<header>`, `<nav>`) | `src/components/Navbar/Navbar.tsx` + `Navbar.css` | Modularizado con `NavLink` y botón de tema |
| Navegación por anclas (`#sobre-mi`, `#proyectos`, `#contacto`) | `index.html` (`<a href="#...">`) | `src/App.tsx` (`BrowserRouter`, `Routes`, `Route`) | Migrado a rutas SPA (`/`, `/proyectos`, `/contacto`, `*`) |
| Sección *Sobre mí* y fotografía circular de perfil | `index.html` (`#sobre-mi`) + `assets/img/perfil.jpg` | `src/pages/HomePage.tsx` + `HomePage.css` + `src/assets/perfil.jpg` | Refactorizado con `<figure>` y `<figcaption>` |
| Sección *Trabajos y Proyectos Destacados* (2 proyectos) | `index.html` (`#proyectos`, `<article>`) | `src/data/portfolioData.ts` + `src/components/ProjectCard/` + `src/pages/ProjectsPage.tsx` | Datos desacoplados en TS + filtro por tecnología |
| Enlaces placeholder a repositorios (`href="#"`) | `index.html` (`article footer a`) | `src/components/ProjectCard/ProjectCard.tsx` (`https://github.com/mvaldes2026`) | Corregido con enlaces funcionales y `rel="noopener noreferrer"` |
| Sección *Contacto* y formulario de 4 campos | `index.html` (`#contacto`, `<form>`, `<fieldset>`) | `src/pages/ContactPage.tsx` + `ContactPage.css` | Migrado a componentes controlados con validación reactiva |
| Pie de página institucional con `<address>` | `index.html` (`#pie-pagina`, `<footer>`) | `src/components/Footer/Footer.tsx` + `Footer.css` | Modularizado en componente reutilizable |
| Variables cromáticas territoriales (`#1B4D3E`, `#1E5B70`, `#8B5A2B`, `#F6F4F0`) | `assets/styles/style.css` (`:root`) | `src/index.css` (`:root` y `[data-theme='dark']`) | Conservado 100% fiel + extensión a modo oscuro |
| Archivo JavaScript estructural vacío | `assets/scripts/script.js` (`console.log`) | `ThemeContext.tsx`, `useFetchApi.ts`, `ProjectsPage.tsx`, `ContactPage.tsx` | Reemplazado por interactividad declarativa en React |

---

## 2. Refactorizaciones y Mejoras Realizadas Respecto a la E2

### A. Arquitectura Modular y Tipado Estricto
* **Desacoplamiento de datos y vistas:** Los textos personales y proyectos estáticos (*Cabañas SurVal* y *EID de Cálculo Básico - Calculadora de Límites*) se extrajeron desde el HTML hacia `src/data/portfolioData.ts`, tipados mediante interfaces estrictas en `src/types/index.ts` sin recurrir al tipo `any`.
* **Consumo de API externa:** Se incorporó la sección *Repositorios Públicos en GitHub* en `/proyectos`, consumiendo `https://api.github.com/users/mvaldes2026/repos?sort=updated&per_page=6` mediante el custom hook `useFetchApi<T>` con gestión explícita de estados (`loading`, `error`, éxito), caché en memoria (`Map`) y limpieza mediante `AbortController`.

### B. Correcciones Estructurales, Visuales y de Accesibilidad
1. **Corrección del layout de grilla en el formulario de contacto:** En la E2 (`docs/captura-e2.png`), aplicar `display: grid` directamente sobre `<fieldset>` provocaba que `<legend>` desplazara la primera columna, generando saltos de línea incómodos en `Nombre completo *:` / `Correo electrónico *:` y comprimiendo el botón `Enviar Mensaje`. En `ContactPage.tsx` se encapsularon los campos dentro de una lista semántica `<ul className="contact-form__grid">`, logrando una alineación simétrica en dos columnas.
2. **Eliminación de contenedores genéricos (`<div>` y `<span>`) y unidades fijas (`px`):** Toda la interfaz se construyó con etiquetas HTML5 semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<output>`, `<dl>`, `<dt>`, `<dd>`, `<time>`, `<ul>`, `<li>`, `<fieldset>`, `<legend>`, `<address>`, `<footer>`). Asimismo, todas las medidas CSS fueron convertidas a unidades relativas (`rem`, `em` y `%`) para respetar el escalado tipográfico del navegador.
3. **Depuración de atributos WAI-ARIA redundantes:** En la E2 se utilizaban roles redundantes sobre etiquetas nativas (`role="banner"` en `<header>`, `role="navigation"` en `<nav>`, `role="main"` en `<main>`, `role="contentinfo"` en `<footer>` y `aria-required="true"` junto a `required`). En la E4 se depuraron siguiendo la primera regla de ARIA, reservando los atributos ARIA exclusivamente para estados dinámicos reales (`aria-pressed`, `aria-invalid`, `aria-describedby`, `aria-live`, `role="alert"`).
4. **Nuevas interacciones declarativas:** Se implementó un selector global de tema claro/oscuro persistente en `localStorage` mediante `ThemeContext` (Context API), un filtro interactivo por tecnología en `ProjectsPage` y validación completa con mensajes de error y confirmación accesible (`<output>`) en `ContactPage`.