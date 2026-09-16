# Portfolio · David Díaz Guerra

Portfolio profesional en español de David Díaz Guerra, desarrollado con Angular 21, TypeScript y Tailwind CSS 4.

## Ejecutar en local

Requisitos: Node.js 24 y npm 11.

```bash
npm ci
npm start
```

Abre http://localhost:4200. Ejecuta los comandos dentro de esta carpeta, donde está package.json.

## Compilar

```bash
npm run build
```

El resultado se genera en dist/portfolio-david/browser. Para desplegarlo, configura el servidor para devolver index.html en las rutas de la aplicación.

## Personalización

- Paleta, tipografía y estilos responsive: src/styles.css.
- Presentación y posicionamiento profesional: src/app/sections/hero/hero.html y src/app/sections/about/about.html.
- Tarjetas de proyectos: src/app/sections/projects/projects.html.
- Fichas: src/app/pages/project-detail/project-detail.html.
- Experiencia: src/app/data/experience.ts.
- Formación: src/app/sections/education/education.html.
- Contacto: src/app/sections/contact/contact.html. Incluye formulario, correo profesional, WhatsApp y Discord.
- Enlaces profesionales: GitHub y LinkedIn están disponibles desde el footer.
- SEO y metadatos sociales: src/index.html.

No se han inventado titulaciones, métricas, capturas ni demos. La portada utiliza una ilustración genérica de un editor TypeScript, sin referencias a proyectos concretos. La paleta utiliza negro y gris neutro con blanco suave. El azul se limita a botones, enlaces y pequeños detalles, sin teñir fondos ni tarjetas. Simracing Management solo presenta información general y mantiene privados sus detalles técnicos.

Las fuentes usan la pila del sistema, sin descargas externas. El ZIP excluye dependencias, cachés e historial Git. npm ci reconstruye las dependencias a partir del lockfile incluido.

## Verificación de esta entrega

Esta entrega no incluye `node_modules`. Valida el paquete en tu entorno local con `npm ci`, `npm run build` y `npm test` antes de publicarlo. El límite de aviso para estilos de componente se mantiene activo y se ajusta a 6 kB para acomodar la tarjeta visual de proyectos sin eliminar la protección frente a crecimiento accidental.

## Proyectos

Edita src/app/data/projects.ts para añadir proyectos. Gestión Taller GTA V RP se mantiene como proyecto principal mediante `featured: true`; GT7 Daily Bot y Simracing Management aparecen en “Otros proyectos”. Los proyectos públicos disponen de ficha propia y enlace a su repositorio de GitHub.

## Colores de tecnologías

Las etiquetas comparten el componente src/app/shared/tech-badge/tech-badge.ts. El stack incluye también Git y GitHub como herramientas de control de versiones y publicación de código. Su paleta central aplica el mismo color en Tecnologías, tarjetas y ficha de proyecto. El logo aparece a la izquierda y el texto utiliza un tono más claro para mejorar la lectura sobre fondo oscuro. REST API utiliza un violeta editorial, ya que no representa una marca. Las tecnologías no registradas reciben un tono neutro.

Los logos SVG se incluyen localmente en public/icons/tech. REST API utiliza un símbolo genérico de código, porque no tiene un logo de marca propio. Los créditos y licencias están en esa carpeta.

## Formulario de contacto

El formulario valida nombre, correo, asunto y mensaje y abre un enlace mailto con el contenido codificado. El visitante debe confirmar el envío en su aplicación de correo: no es un envío automático ni hay un servicio SMTP conectado. El correo del remitente introducido se incluye en el cuerpo del mensaje. Se conserva el texto en pantalla si no hay un cliente configurado.

Destino: daviddiaz1992@gmail.com. WhatsApp: https://wa.me/34655208187.

Para enviar directamente desde la página será necesario conectar un backend o servicio de formularios; no se deben incluir claves SMTP en Angular.

Discord: alcarin22. La tarjeta muestra el usuario y un botón para copiarlo, con una indicación alternativa si el navegador no permite acceder al portapapeles. No se genera un enlace a un perfil sin disponer de su ID.


## Ajustes de presentación

Las tarjetas de “Otros proyectos” muestran primero el nombre, estado, descripción y tecnologías; la identidad visual de cada proyecto queda situada debajo. Gestión Taller GTA V RP mantiene su composición destacada independiente.
