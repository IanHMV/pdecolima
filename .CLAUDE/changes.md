# Cambios de optimización — Componentes y rutas

## Archivos nuevos

| Archivo | Descripción |
|---|---|
| `src/components/SystemCard.jsx` | Card reutilizable para los 6 sistemas. Recibe `url`, `imagen`, `descripcion`, `activeClass`. Si `url` es null, renderiza deshabilitada automáticamente. |
| `src/layout/AppNav.jsx` | Navbar compartida que acepta `navItems` como prop. Incluye fix del memory leak en el event listener de resize. |

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/layout/AppNavCiudadano.jsx` | 220 líneas → 18. Ahora solo define sus items y delega a `AppNav`. Links apuntan a PDN (plataformadigitalnacional.org). |
| `src/layout/AppNavFuncionario.jsx` | Igual que ciudadano. Links apuntan a `pdecolima.mx/s1` y `/s3`. |
| `src/pages/ciudadano/InicioCiudadano.jsx` | 158 líneas → 60. Reemplazado HTML repetido por data array + `SystemCard`. Se agregó animación stagger que le faltaba. |
| `src/pages/funcionario/InicioFuncionario.jsx` | 145 líneas → 65. Mismo patrón data-driven. |
| `src/components/Lista.jsx` | Eliminado hack `preventDefault` + `setTimeout` + `window.open`. Reemplazado por `<a target="_blank" rel="noopener noreferrer">` estándar. |

## Notas

- `src/pages/Proof.jsx` existe pero no está importado en ningún lado (dead code).
- Para agregar un nuevo sistema, solo añadir un objeto al array `SISTEMAS` en `InicioCiudadano.jsx` o `InicioFuncionario.jsx`.
- Los sistemas deshabilitados se controlan poniendo `url: null` en el array.
