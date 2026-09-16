# Portfolio · David Díaz

Portfolio en español con Angular 21 y Tailwind CSS 4.

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
- Presentación: src/app/sections/hero/hero.html.
- Tarjetas de proyectos: src/app/sections/projects/projects.html.
- Fichas: src/app/pages/project-detail/project-detail.html.
- Experiencia: src/app/data/experience.ts.
- Formación: src/app/sections/education/education.html.
- Contacto: src/app/sections/contact/contact.html. Incluye el correo profesional y el enlace directo a WhatsApp.

No se han inventado titulaciones, métricas, capturas ni demos. La portada utiliza una ilustración genérica de un editor TypeScript, sin referencias a proyectos concretos. La paleta utiliza negro y gris neutro con blanco suave. El azul se limita a botones, enlaces y pequeños detalles, sin teñir fondos ni tarjetas. Proyecto Simracing solo presenta información general. La ruta de demo del taller lleva a su ficha informativa.

Las fuentes usan la pila del sistema, sin descargas externas. El ZIP excluye dependencias, cachés, archivos del editor e historial Git. npm ci reconstruye las dependencias a partir del lockfile incluido.

## Verificación de esta entrega

Compilación de producción completada y pruebas existentes superadas. La comprobación visual en navegador queda pendiente porque el navegador de pruebas no pudo descargarse en el entorno de preparación.

## Proyectos

Edita src/app/data/projects.ts para añadir proyectos. El proyecto con featured: true ocupa la fila destacada; el resto se coloca debajo en cuatro columnas en escritorio, dos en tablet y una en móvil. Las filas crecen automáticamente. No hay tarjetas de relleno.

## Colores de tecnologías

Las etiquetas comparten el componente src/app/shared/tech-badge/tech-badge.ts. Su paleta central aplica el mismo color en Tecnologías, tarjetas y ficha de proyecto. El logo aparece a la izquierda y el texto utiliza un tono más claro para mejorar la lectura sobre fondo oscuro. REST API utiliza un violeta editorial, ya que no representa una marca. Las tecnologías no registradas reciben un tono neutro.

Los logos SVG se incluyen localmente en public/icons/tech. REST API utiliza un símbolo genérico de código, porque no tiene un logo de marca propio. Los créditos y licencias están en esa carpeta.

## Formulario de contacto

El formulario valida nombre, correo, asunto y mensaje y abre un enlace mailto con el contenido codificado. El visitante debe confirmar el envío en su aplicación de correo: no es un envío automático ni hay un servicio SMTP conectado. El correo del remitente introducido se incluye en el cuerpo del mensaje. Se conserva el texto en pantalla si no hay un cliente configurado.

Destino: daviddiaz1992@gmail.com. WhatsApp: https://wa.me/34655208187.

Para enviar directamente desde la página será necesario conectar un backend o servicio de formularios; no se deben incluir claves SMTP en Angular.

Discord: alcarin22. La tarjeta muestra el usuario y un botón para copiarlo, con una indicación alternativa si el navegador no permite acceder al portapapeles. No se genera un enlace a un perfil sin disponer de su ID.
