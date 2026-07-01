import { Navigate, Outlet } from "react-router-dom";

import { useLocalStorage } from "../storage/useLocalStorage";

function SessionUser() {
  const sessionUser = useLocalStorage.get("user");

  if (!sessionUser) {
    return <Navigate to="/ingreso" replace />;
  }

  if (sessionUser.rol !== "usuario") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
}

export default SessionUser;
