import { Navigate, Outlet } from "react-router-dom";

import { useLocalStorage } from "../storage/useLocalStorage";

function SessionAdmin() {
  const sessionUser = useLocalStorage.get("user");

  if (!sessionUser) {
    return <Navigate to="/ingreso" replace />;
  }

  if (sessionUser.rol !== "fundacion") {
    return <Navigate to="/ingreso" replace />;
  }

  return <Outlet />;
}

export default SessionAdmin;
