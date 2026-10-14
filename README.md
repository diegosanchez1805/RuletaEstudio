# 🎯 Ruleta de Estudio - Ingeniería de Software (Versión Completa)

Una aplicación web de alto rendimiento, interactiva, moderna y receptiva para guiar tus sesiones de estudio en 24 áreas críticas de la ingeniería de software.

---

## 🌟 Nuevas Funcionalidades Implementadas

### 🎨 Experiencia Visual y Microinteracciones
- **FavIcon Personalizado**: Ícono SVG vectorial integrado directamente (`data:image/svg+xml`) para carga instantánea y nitidez en cualquier resolución.
- **Loading Screen Elegante**: Pantalla de carga inicial con logo animado y barra de progreso que desaparece suavemente al estar listo el temario.
- **Animaciones de Entrada Escalonadas**: Animación del *Hero* en cascada para el badge, título, descripción y ruleta.
- **Microinteracciones y Efectos Hover**:
  - Efecto de pulsación y escala táctil en botones (`active:scale-95`).
  - Animación de rebote (*ripple*) en botones principales.
  - Elevación con sombra suave en tarjetas estadísticas, temario y testimonios al pasar el cursor (`hover:translate-y-1`).
- **Animaciones al Hacer Scroll**: Revelación suave progresiva de secciones (`reveal-on-scroll`) mediante `IntersectionObserver`.
- **Botón "Volver Arriba"**: Botón flotante animado que aparece automáticamente al scrollear y regresa al inicio con desplazamiento suave.

### 📱 Diseño Móvil y Navegación
- **Menú Móvil Desplegable**: Drawer con enlaces rápidos a todas las secciones, cambio de idioma, tema y sonido.
- **Barra CTA Móvil Adherente (*Sticky*)**: Al bajar en la página desde el móvil, aparece una barra inferior con botón directo para girar la ruleta sin perder el contexto.
- **Diseño 100% Responsivo**: Adaptación fluida del canvas, grillas y tipografía en cualquier tamaño de pantalla.

### 🌓 Modos y Personalización
- **Modo Oscuro / Modo Claro**: Alternador con persistencia en `localStorage`, paletas de colores optimizadas para descanso visual y adaptación del canvas.
- **Selector de Idioma (Español / English)**: Traducción dinámica instantánea de textos, botones, estadísticas, notificaciones y modales sin recargar la página.
- **Botón de Silencio / Sonido**: Efectos sintetizados en tiempo real mediante la Web Audio API (giro mecánico, fanfarria triunfal y campana de pomodoro).

### 📣 Llamadas a la Acción (CTAs) Estratégicas
- Botón principal de giro en el Hero.
- Botón de giro en la barra superior.
- Banner central de motivación técnica.
- Barra inferior adherente en dispositivos móviles.

### 🌐 Redes Sociales y Compartir
- **Botones de Redes Sociales**: Atajos para compartir en Twitter/X, LinkedIn y WhatsApp con mensajes dinámicos sobre el tema que te tocó estudiar.

---

## ⌨️ Atajos de Teclado

- **Barra Espaciadora**: ¡Gira la ruleta en cualquier momento!

---

## 📂 Archivos del Proyecto

- [**`index.html`**](file:///c:/Users/PC/OneDrive/Escritorio/Ruleta/index.html): Estructura semántica, favIcon, secciones y modales.
- [**`styles.css`**](file:///c:/Users/PC/OneDrive/Escritorio/Ruleta/styles.css): Estilos, variables para modo claro/oscuro, microinteracciones y animaciones.
- [**`app.js`**](file:///c:/Users/PC/OneDrive/Escritorio/Ruleta/app.js): Lógica de física, Web Audio, i18n (ES/EN), temporizador Pomodoro y persistencia.
- [**`data.js`**](file:///c:/Users/PC/OneDrive/Escritorio/Ruleta/data.js): Arreglo original de los 24 temas y subtemas de ingeniería de software.
