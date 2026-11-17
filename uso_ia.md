# Bitácora de Uso Ético y Técnico de Inteligencia Artificial (`uso_ia.md`)

**Asignatura:** Desarrollo de Frontend (ICINF1107) — Evaluación N°4 (PIF)  
**Estudiante:** Mauricio Valdés  
**Repositorio E4:** `evaluacion_4-mauricio_valdes`  
**Repositorio Original E2 (Evidencia):** `https://github.com/mvaldes2026/mvaldes2026-portafolio-frontend`

---

## 1. Herramientas utilizadas
* **Gemini (Google):** Asistente principal utilizado para planificación arquitectónica según rúbrica, definición de interfaces estrictas en TypeScript, depuración de errores de compilación y Git, refactorización a metodología BEM, unidades relativas (`rem`/`em`) y revisión de accesibilidad semántica.

## 2. Propósito de uso
* Analizar los requerimientos técnicos y criterios de evaluación de la Evaluación N°4 para estructurar el proyecto desde cero.
* Diagnosticar y resolver conflictos iniciales de sincronización en Git y errores de resolución de módulos en TypeScript (`ts(2307)`).
* Migrar fielmente la estructura, paleta territorial y contenido de la Evaluación N°2 hacia una arquitectura SPA en React y TypeScript sin uso de `any`, eliminando contenedores genéricos `<div>` y evitando medidas fijas en `px`.
* Implementar la gestión de estado transversal (`ThemeContext`), el enrutamiento SPA (`react-router-dom`) y el consumo asíncrono de la API REST pública de GitHub.

## 3. Prompts representativos
1. *"Hola, Gemini, necesito iniciar con la Evaluación 4, dime todo lo que debemos hacer para poder iniciar bien y óptimamente."*
2. *"Ya, tengo la estructura base, ¿cómo actualizo mi repo con Git Bash? ¿dónde pongo post para la captura de la foto? ¿se ve bien la foto?"*
3. *"Y me arrojó un error [captura de terminal con `! [rejected] main -> main (fetch first)`]."*
4. *"¿Creo las carpetas restantes de src y hago el INVENTARIO.md, README.md y lo que falta ahora mismo? Recuerda actualizar SIEMPRE el uso_ia.md cada vez que mande un nuevo prompt..."*
5. *"Este es el portafolio de la Evaluación 2. Estos son los archivos correspondientes... Empecemos de una vez para poder hacer todo idéntico y perfecto, recuerda otra cosa, SIEMPRE LENGUAJE SEMÁNTICO TOTAL (y WAI-ARIA, solo si es necesario)."*
6. *"Antes de pasar a la rama 3, quiero ver por qué hay errores acá, también si puedes usar lenguaje semántico en HomePages.tsx. Y por cuál link debo reemplazar esto en el código: '../../data/portfolioData'. Por si acaso, mi repo del portafolio original es este: https://github.com/mvaldes2026/mvaldes2026-portafolio-frontend"*
7. *"Persiste el error en los demás archivos con el '../data/portfolioData' a pesar de que cambié el nombre a portfolioData.ts. Resolvamos eso, ah, y recuerda, TODOS LOS ARCHIVOS DEBEN LLEVAR CÓDIGO SEMÁNTICO, evitemos usar los <div> en lo posible y todo el código ordinario. También habían dicho algo de que ojalá evitar usar px en las medidas del CSS. Actualiza el commit a uno definitivo para enumerar TODOS LOS CAMBIOS PARA PASAR A LA RAMA 3 Y ACTUALIZA EL uso_ia.md."*

## 4. Output recibido
* Hoja de ruta priorizada según ponderación de los 9 criterios de la rúbrica.
* Diagnóstico de la persistencia del error `ts(2307)` (diferencia de profundidad `../` en `pages/` frente a `../../` en `components/`, más reinicio del servidor TypeScript en VS Code).
* Refactorización integral de la rama `feat/rutas-y-contexto` (`index.css`, `ThemeContext.tsx`, `Navbar`, `Footer`, `HomePage`, `NotFoundPage`) eliminando por completo etiquetas `<div>` y reemplazando todas las medidas `px` por unidades relativas `rem` y `em`.

## 5. Ajustes, refactorización y verificación
* **Resolución de importaciones y caché TS:** Se verificaron las rutas relativas según nivel de directorio (`../../data/portfolioData` en componentes y `../data/portfolioData` en páginas), se incorporó `src/assets/perfil.jpg` y se reinició el servidor TS de VS Code, confirmando cero errores en el panel de Problemas.
* **HTML5 semántico sin `<div>`:** Se eliminaron todos los contenedores `<div>` de `Navbar.tsx` (`<header>`, `<h1>`, `<p>`, `<nav>`), `Footer.tsx` (`<footer>`, `<address>`), `HomePage.tsx` (`<section>`, `<header>`, `<figure>`, `<figcaption>`) y `NotFoundPage.tsx` (`<section>`, `<header>`), reservando WAI-ARIA solo para estados dinámicos (`aria-pressed`, `aria-label`, `aria-labelledby`).
* **CSS responsivo con unidades relativas:** Se reemplazaron todas las medidas en `px` (bordes, radios, sombras, tamaños de avatar, ancho máximo y media queries) por `rem` y `em` para respetar las preferencias de zoom tipográfico del usuario.
* **Registro de evidencia E2:** Se documentó el repositorio original (`https://github.com/mvaldes2026/mvaldes2026-portafolio-frontend`) para trazabilidad.

## 6. Reflexión crítica final
*(Se completará en la rama final `docs/documentacion-final` tras ejecutar la auditoría de Lighthouse y revisar la compilación de producción).*