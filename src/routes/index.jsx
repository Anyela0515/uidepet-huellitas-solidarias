import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import RegistroFundacionPage from "../pages/RegistroFundacion";
import DashboardPage from "../pages/Dashboard";
import LayoutPage from "../pages/admin/Layout";
import ManageMascotasPage from "../pages/admin/ManageMascotas";
import ManageSolicitudesPage from "../pages/admin/ManageSolicitudes";
import SessionAdmin from "./SessionAdmin";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ingreso" />} />
      <Route path="/ingreso" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/registro-fundacion" element={<RegistroFundacionPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard-fundacion" element={<Navigate to="/admin/dashboard" replace />} />
      <Route element={<SessionAdmin />}>
        <Route path="/admin" element={<LayoutPage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="mascotas" element={<ManageMascotasPage />} />
          <Route path="solicitudes" element={<ManageSolicitudesPage />} />
        </Route>
      </Route>
      <Route path="/perfil" element={<h1>Perfil de usuario</h1>} />
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
}

export default AppRouters;
