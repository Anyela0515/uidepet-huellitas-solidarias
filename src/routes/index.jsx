import { Routes, Route, Navigate } from "react-router-dom";

import InicioPage from "../pages/Inicio";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import RegistroFundacionPage from "../pages/RegistroFundacion";
import LayoutPage from "../pages/admin/Layout";
import DashboardFundacionPage from "../pages/admin/DashboardFundacion";
import ManageMascotasPage from "../pages/admin/ManageMascotas";
import ManageSolicitudesPage from "../pages/admin/ManageSolicitudes";
import PerfilPage from "../pages/user/Perfil";
import SessionAdmin from "./SessionAdmin";
import SessionUser from "./SessionUser";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/inicio" element={<InicioPage />} />
      <Route path="/dashboard" element={<Navigate to="/" replace />} />
      <Route path="/ingreso" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/registro-fundacion" element={<RegistroFundacionPage />} />
      <Route path="/dashboard-fundacion" element={<Navigate to="/admin/dashboard" replace />} />

      <Route element={<SessionUser />}>
        <Route path="/perfil" element={<PerfilPage />} />
      </Route>

      <Route element={<SessionAdmin />}>
        <Route path="/admin" element={<LayoutPage />}>
          <Route path="dashboard" element={<DashboardFundacionPage />} />
          <Route path="mascotas" element={<ManageMascotasPage />} />
          <Route path="solicitudes" element={<ManageSolicitudesPage />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
}

export default AppRouters;
