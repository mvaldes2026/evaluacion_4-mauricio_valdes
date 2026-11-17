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
* Documentar de forma trazable el inventario de migración (`INVENTARIO.md`), la guía técnica (`README.md`) y la bitácora ética (`uso_ia.md`).

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
10. *"Ya, estamos en docs/documentacion-final. Terminemos con esta rama."*
11. *"Dame el archivo del README.md definitivo para que quede bien estructurado (yo solo copio y pego) y ahora sí, actualiza el uso_ia.md y el commit, porque ahora sí, cerramos definitivamente. Y quiero saber lo siguiente. ¿Cómo se abre la página?"*

## 4. Output recibido
* Hoja de ruta priorizada según ponderación de los 9 criterios de la rúbrica.
* Diagnóstico y solución de errores técnicos en Git Bash (`fetch first`), TypeScript (`ts(2307)` por nomenclatura y profundidad de rutas relativas) y ESLint (`react-hooks/set-state-in-effect` en `useFetchApi.ts`).
* Implementación modular completa dividida en ramas funcionales (`feat/arquitectura-base`, `feat/rutas-y-contexto`, `feat/consumo-api-y-vistas`, `docs/documentacion-final`), con tipado estricto sin `any`, CSS BEM con unidades relativas (`rem`/`em`) y HTML5 semántico puro.
* Documentación técnica definitiva (`INVENTARIO.md`, `README.md`, `uso_ia.md`) e instrucciones de ejecución de servidor local en desarrollo (`npm run dev`) y producción (`npm run build` + `npm run preview`).

## 5. Ajustes, refactorización y verificación
* **Eliminación de renderizados en cascada (`useFetchApi.ts`):** Se refactorizó el hook inicial propuesto por la IA tras detectar un error de ESLint al ejecutar `setState` síncrono dentro de `useEffect` para respuestas cacheadas. Se derivó el estado cacheado durante el renderizado y se mantuvo `AbortController` en la función de limpieza para prevenir condiciones de carrera.
* **Resolución de rutas relativas y caché del servidor TS:** Se estandarizó `src/data/portfolioData.ts`, se ajustaron las rutas de importación según nivel de carpeta (`../` en páginas y `../../` en componentes) y se reinició el servidor TypeScript en VS Code.
* **Semántica HTML5 estricta y CSS relativo:** Se eliminaron todas las etiquetas `<div>` y `<span>`, reemplazándolas por `<figure>`, `<figcaption>`, `<output>`, `<dl>`, `<dt>`, `<dd>`, `<time>`, `<ul>` y `<li>`. Además, se sustituyeron todas las medidas en `px` por `rem` y `em`, y se corrigió la grilla del formulario de contacto de la E2.
* **Verificación integral:** Se comprobó la compilación limpia con `npm run build` (cero errores de `tsc`), la ejecución local en navegador mediante `npm run dev` y `npm run preview`, el funcionamiento de todas las rutas (`/`, `/proyectos`, `/contacto`, `*`), el consumo en tiempo real de la API de GitHub y la auditoría de accesibilidad y navegación por teclado.

## 6. Reflexión crítica final
El desarrollo de este proyecto me permitió comprender en profundidad la transición desde un sitio estático en HTML/CSS vanilla (Evaluación N°2) hacia una Single Page Application modular en React y TypeScript. Utilizar Inteligencia Artificial como copiloto técnico aceleró la generación de estructuras repetitivas y la migración de estilos a metodología BEM, pero también evidenció los riesgos reales de aceptar código sin validación: en dos ocasiones surgieron errores concretos (primero por discrepancias de nombres y rutas en importaciones TypeScript, y luego por una regla estricta de ESLint sobre renderizados en cascada dentro de `useEffect`) que exigieron analizar el mensaje del compilador, entender el ciclo de vida de React y refactorizar la solución. Gracias a haber estructurado el proyecto por ramas mediante Pull Requests, haber mantenido el tipado estricto sin `any` y haber probado manualmente cada estado de la interfaz (carga, error, éxito, rutas y teclado), cuento con pleno dominio del código implementado y estoy preparado para defender cada decisión arquitectónica en el cuestionario de validación sin asistencia externa.