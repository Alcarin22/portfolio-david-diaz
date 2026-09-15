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
- Contacto: src/app/sections/contact/contact.html. Se utiliza el perfil público de X conocido; puedes sustituirlo por tu correo profesional o LinkedIn.

No se han inventado titulaciones, métricas, capturas ni demos. La portada utiliza una ilustración genérica de un editor TypeScript, sin referencias a proyectos concretos. La paleta utiliza negro y gris neutro con blanco suave. El azul se limita a botones, enlaces y pequeños detalles, sin teñir fondos ni tarjetas. Proyecto Simracing solo presenta información general. La ruta de demo del taller lleva a su ficha informativa.

Las fuentes usan la pila del sistema, sin descargas externas. El ZIP excluye dependencias, cachés, archivos del editor e historial Git. npm ci reconstruye las dependencias a partir del lockfile incluido.

## Verificación de esta entrega

Compilación de producción completada y pruebas existentes superadas. La comprobación visual en navegador queda pendiente porque el navegador de pruebas no pudo descargarse en el entorno de preparación.

## Proyectos

Edita src/app/data/projects.ts para añadir proyectos. El proyecto con featured: true ocupa la fila destacada; el resto se coloca debajo en cuatro columnas en escritorio, dos en tablet y una en móvil. Las filas crecen automáticamente. No hay tarjetas de relleno.
