# Bitácora de Uso Ético y Técnico de Inteligencia Artificial (`uso_ia.md`)

**Asignatura:** Desarrollo de Frontend (ICINF1107) — Evaluación N°4 (PIF)  
**Estudiante:** Mauricio Valdés 
**Repositorio:** `evaluacion_4-mauricio_valdes`

---

## 1. Herramientas utilizadas
* **Gemini (Google):** Asistente principal utilizado para planificación arquitectónica según rúbrica, definición de tipos en TypeScript, depuración de comandos Git, refactorización a metodología BEM y revisión de accesibilidad.

## 2. Propósito de uso
* Analizar los requerimientos técnicos y criterios de evaluación de la Evaluación N°4 para estructurar el proyecto desde cero.
* Diagnosticar y resolver conflictos iniciales de sincronización entre el repositorio local (Vite) y el repositorio remoto en GitHub.
* Asistir en la modularización de componentes, tipado estricto y documentación técnica (`INVENTARIO.md`, `README.md`).

## 3. Prompts representativos
1. *"Hola, Gemini, necesito iniciar con la Evaluación 4, dime todo lo que debemos hacer para poder iniciar bien y óptimamente."* (Adjuntando rúbrica y especificación de requerimientos).
2. *"Ya, tengo la estructura base, ¿cómo actualizo mi repo con Git Bash? ¿dónde pongo post para la captura de la foto? ¿se ve bien la foto?"*
3. *"Y me arrojó un error [captura de terminal con `! [rejected] main -> main (fetch first)`]."*

## 4. Output recibido
* Hoja de ruta priorizada según ponderación de los 9 criterios de la rúbrica.
* Validación de la captura completa del portafolio de la Evaluación N°2 y ubicación correcta en `docs/captura-e2.png`.
* Diagnóstico del rechazo `fetch first` en Git Bash y comando de sincronización inicial hacia `origin main`.

## 5. Ajustes, refactorización y verificación
* **Verificación en entorno local:** Se comprobó la estructura de carpetas en Visual Studio Code creando `docs/` en la raíz del proyecto (evitando anidarla dentro de `src/`).
* **Verificación en GitHub:** Se ejecutó el comando de subida en Git Bash y se verificó en la interfaz web de GitHub (`mvaldes2026/evaluacion_4-mauricio_valdes`) que los archivos base de Vite quedaron publicados en la rama `main`.
* **Ajuste visual planificado:** A partir de la revisión de `docs/captura-e2.png`, se identificó la necesidad de corregir el salto de línea en los `<label>` y en el botón de envío del formulario de contacto durante la migración a React.

## 6. Reflexión crítica final
*(Se completará al finalizar el desarrollo con el análisis personal sobre el aprendizaje adquirido, la mitigación de deuda cognitiva y la defensa técnica del código).*