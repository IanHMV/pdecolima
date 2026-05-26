# PDECOLIMA — Plataforma Digital Estatal de Colima

## Descripción del proyecto

Aplicación web institucional de la **Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Colima (SESAECOL)**. Es la Plataforma Digital Estatal (PDE) de Colima, que conecta a ciudadanos y servidores públicos con los sistemas de transparencia y anticorrupción del estado.

## Stack tecnológico

- **Framework:** React 18 + Vite 5
- **Estilos:** Tailwind CSS 3 + Material Tailwind (componentes UI)
- **Animaciones:** Framer Motion
- **Routing:** React Router DOM v7
- **Iconos:** Heroicons
- **Build/Deploy:** Dockerfile + docker-compose + Nginx

## Estructura del proyecto

```
src/
├── App.jsx                        # Router principal con 3 rutas base
├── main.jsx                       # Entry point
├── index.css
├── pages/
│   ├── Inicio.jsx                 # Landing page con animación de entrada
│   ├── Proof.jsx                  # Página de pruebas
│   ├── ciudadano/
│   │   ├── Entes.jsx              # Lista de entes vinculados (Accordion)
│   │   └── InicioCiudadano.jsx    # Vista de sistemas para ciudadano
│   └── funcionario/
│       └── InicioFuncionario.jsx  # Vista para servidores públicos
├── layout/
│   ├── LayoutBase.jsx             # Layout raíz (fondo global + overlay)
│   ├── LayoutCiudadano.jsx        # Layout con nav y footer para /ciudadano
│   ├── LayoutFuncionario.jsx      # Layout para /funcionario
│   ├── AppNavCiudadano.jsx        # Navbar ciudadano (Material Tailwind)
│   ├── AppNavFuncionario.jsx      # Navbar funcionario
│   └── Footer.jsx                 # Footer con contacto, redes y mapa
├── components/
│   ├── DefaultAccordion.jsx       # Accordion reutilizable (Material Tailwind)
│   ├── Lista.jsx                  # Componente de lista de enlaces
│   ├── FadeIn.jsx                 # Wrapper de animación de entrada
│   └── LoaderCube.jsx             # Pantalla de carga inicial (2 segundos)
└── styles/
    ├── background.css             # Fondo tech animado (clase .tech-background)
    ├── fonts.css                  # Fuente Rubik Mono One
    └── loaders.css                # Estilos del loader
```

## Rutas de la aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `Inicio` | Landing con loader de 2s y animación de polígonos |
| `/ciudadano` | `Entes` | Entes y sistemas vinculados (Accordion) |
| `/ciudadano/sistemas` | `InicioCiudadano` | Sistemas disponibles para el ciudadano |
| `/funcionario` | `InicioFuncionario` | Portal de servidores públicos |

## Entidad propietaria

**SESAECOL** — Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Colima  
- Dirección: Alfonso Michel #34, Jardines Vista Hermosa III, 28017 Colima, Col.  
- Teléfono: +52-312-6883221  
- Correo: sesaecolsaec@gmail.com  
- Redes: Facebook, Instagram, X (Twitter), YouTube — todas como `@sesaecol`

## Sistemas externos enlazados

- **Declaranet (Poder Ejecutivo):** https://decla-csp.col.gob.mx/
- **Sistema de Declaraciones Patrimoniales (PDN):** https://www.plataformadigitalnacional.org/declaraciones
- **Sistema de Sancionados (PDN):** https://www.plataformadigitalnacional.org/sancionados

## Comandos útiles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción (salida en /dist)
npm run preview   # Vista previa del build
```

## Deploy

Usa Docker + Nginx. El `docker-compose.yml` y `nginx/container.conf` manejan el servidor de producción. El build estático se sirve desde `/dist`.

## Notas de desarrollo

- El fondo animado (`tech-background`) es global y vive en `LayoutBase`, no repetirlo en páginas hijas.
- El loader inicial de `App.jsx` dura 2 segundos (simula carga de API/auth); está pensado para ser reemplazado por una verificación real de sesión en el futuro.
- `AppNavCiudadano` tiene items de nav (`navListItems`) actualmente vacíos/comentados — se pueden activar cuando haya más secciones.
- La rama principal de trabajo es `main`; la integración con Claude se hace en `claude-integration`.
