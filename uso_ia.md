# Bitácora de Uso Ético y Técnico de Inteligencia Artificial (`uso_ia.md`)

**Asignatura:** Desarrollo de Frontend (ICINF1107) — Evaluación N°4 (PIF)  
**Estudiante:** Mauricio Valdés  
**Repositorio E4:** `evaluacion_4-mauricio_valdes`  
**Repositorio Original E2 (Evidencia):** `https://github.com/mvaldes2026/mvaldes2026-portafolio-frontend`

---

## 1. Herramientas utilizadas
* **Gemini (Google):** Asistente principal utilizado para planificación arquitectónica según rúbrica, definición de interfaces estrictas en TypeScript, depuración de errores de compilación, ESLint y Git, refactorización a metodología BEM, unidades relativas (`rem`/`em`) y revisión de accesibilidad semántica.

## 2. Propósito de uso
* Analizar los requerimientos técnicos y criterios de evaluación de la Evaluación N°4 para estructurar el proyecto desde cero.
* Diagnosticar y resolver conflictos iniciales de sincronización en Git, errores de resolución de módulos en TypeScript (`ts(2307)`) y reglas estrictas de ESLint (`react-hooks/set-state-in-effect`).
* Migrar fielmente la estructura, paleta territorial y contenido de la Evaluación N°2 hacia una arquitectura SPA en React y TypeScript sin uso de `any`, eliminando contenedores genéricos (`<div>`, `<span>`) y evitando medidas fijas en `px`.
* Implementar la gestión de estado transversal (`ThemeContext`), el enrutamiento SPA (`react-router-dom`) y el consumo asíncrono de la API REST pública de GitHub.

## 3. Prompts representativos
1. *"Hola, Gemini, necesito iniciar con la Evaluación 4, dime todo lo que debemos hacer para poder iniciar bien y óptimamente."*
2. *"Ya, tengo la estructura base, ¿cómo actualizo mi repo con Git Bash? ¿dónde pongo post para la captura de la foto? ¿se ve bien la foto?"*
3. *"Y me arrojó un error [captura de terminal con `! [rejected] main -> main (fetch first)`]."*
4. *"¿Creo las carpetas restantes de src y hago el INVENTARIO.md, README.md y lo que falta ahora mismo? Recuerda actualizar SIEMPRE el uso_ia.md cada vez que mande un nuevo prompt..."*
5. *"Este es el portafolio de la Evaluación 2. Estos son los archivos correspondientes... Empecemos de una vez para poder hacer todo idéntico y perfecto, recuerda otra cosa, SIEMPRE LENGUAJE SEMÁNTICO TOTAL (y WAI-ARIA, solo si es necesario)."*
6. *"Antes de pasar a la rama 3, quiero ver por qué hay errores acá, también si puedes usar lenguaje semántico en HomePages.tsx. Y por cuál link debo reemplazar esto en el código: '../../data/portfolioData'. Por si acaso, mi repo del portafolio original es este: https://github.com/mvaldes2026/mvaldes2026-portafolio-frontend"*
7. *"Persiste el error en los demás archivos con el '../data/portfolioData' a pesar de que cambié el nombre a portfolioData.ts. Resolvamos eso, ah, y recuerda, TODOS LOS ARCHIVOS DEBEN LLEVAR CÓDIGO SEMÁNTICO, evitemos usar los <div> en lo posible y todo el código ordinario. También habían dicho algo de que ojalá evitar usar px en las medidas del CSS."*
8. *"Pasemos a la rama 3, NO OLVIDES QUE NO SE USA px, y se usa código puramente semántico."*
9. *"Antes de pasar a la siguiente rama, quiero ver por qué rayos hay un error acá [captura de `useFetchApi.ts` con `eslint(react-hooks/set-state-in-effect)`]. Recuerda actualizar el uso_ia.md y los comandos para subir esto (el commit)."*

## 4. Output recibido
* Hoja de ruta priorizada según ponderación de los 9 criterios de la rúbrica.
* Diagnóstico y solución del error `ts(2307)` en VS Code y refactorización semántica de la rama `feat/rutas-y-contexto`.
* Implementación de la rama `feat/consumo-api-y-vistas`: servicio `githubService.ts`, custom hook `useFetchApi<T>`, componentes reutilizables (`StatusMessage`, `ProjectCard`, `RepoCard`) y vistas `ProjectsPage` y `ContactPage` sin etiquetas `<div>`/`<span>` ni unidades `px`.
* Diagnóstico de la regla `eslint(react-hooks/set-state-in-effect)` en `useFetchApi.ts` y refactorización para derivar los datos cacheados en renderizado, reservando `setState` exclusivamente para la resolución asíncrona de `fetch`.

## 5. Ajustes, refactorización y verificación
* **Eliminación de renderizados en cascada (`useFetchApi.ts`):** Se eliminó la llamada síncrona a `setState` dentro de `useEffect` al consultar `responseCache`, derivando el resultado cacheado durante el render y manteniendo `AbortController` en el cleanup para evitar *race conditions*.
* **Semántica HTML5 estricta en toda la aplicación:** Se utilizaron exclusivamente etiquetas con significado semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<output>`, `<dl>`, `<dt>`, `<dd>`, `<time>`, `<small>`, `<ul>`, `<li>`, `<fieldset>`, `<legend>`, `<address>`, `<footer>`), prescindiendo por completo de `<div>` y `<span>`.
* **CSS 100% relativo y BEM:** Todas las hojas de estilo se escribieron respetando BEM y utilizando únicamente `rem`, `em` y porcentajes.
* **Verificación local:** Se comprobó en VS Code que el panel de Problemas marca `0` errores y se validó la navegación entre rutas (`/`, `/proyectos`, `/contacto`, `*`), el filtro de tecnologías, la validación del formulario y la carga en vivo desde GitHub API.

## 6. Reflexión crítica final
*(Se completará en la rama final `docs/documentacion-final` tras ejecutar la auditoría de Lighthouse y revisar la compilación de producción).*