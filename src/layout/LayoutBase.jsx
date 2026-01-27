import { Outlet } from "react-router-dom";
import "../styles/background.css";

function LayoutBase() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background global */}
      <div
        className="tech-background absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Contenido */}
      <div className="relative z-20">
        <Outlet />
      </div>

    </div>
  );
}

export default LayoutBase;
