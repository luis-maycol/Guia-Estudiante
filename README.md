# IESP MAHP — Guía del Estudiante

Migración de la página HTML original a React + Vite, separando estructura, estilos y lógica.

## Requisitos
- Node.js 18+
- pnpm 9+

## Instalación
```bash
pnpm install
```

## Desarrollo
```bash
pnpm dev
```

## Producción
```bash
pnpm build
pnpm preview
```

## Estructura
- `index.html`: documento HTML de entrada de Vite.
- `src/App.jsx`: componentes, datos y lógica React migrados desde el HTML original.
- `src/index.css`: Tailwind CSS y estilos personalizados.
- `src/main.jsx`: punto de entrada React.
- `tailwind.config.js`: configuración de Tailwind.
- `postcss.config.js`: PostCSS + Autoprefixer.
- `requirements.txt`: requisitos del entorno; las dependencias se instalan con pnpm.
