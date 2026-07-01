import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useLocalStorage } from "../storage/useLocalStorage";
import logoUide from "../assets/logo-uide.png";

function PublicNavbar() {
  const navigate = useNavigate();
  const user = useLocalStorage.get("user");

  const handlePanel = () => {
    if (!user) {
      navigate("/ingreso");
      return;
    }

    if (user.rol === "fundacion") {
      navigate("/admin/dashboard");
    } else {
      navigate("/perfil");
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#1f1f1f",
        borderBottom: "1px solid rgba(151, 0, 79, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={logoUide}
              alt="Logo UIDE"
              sx={{ width: 40, height: 40, objectFit: "contain" }}
            />
            <Box>
              <Typography variant="body2" fontWeight={800} color="#97004F">
                UidePet
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Huellitas Solidarias
              </Typography>
            </Box>
          </Box>

          <Button
            component={RouterLink}
            to="/"
            sx={{ color: "#5f4b55", fontWeight: 600 }}
          >
            Inicio
          </Button>

          <Button
            onClick={handlePanel}
            sx={{ color: "#5f4b55", fontWeight: 600 }}
          >
            {user ? "Mi panel" : "Ingresar"}
          </Button>

          {!user && (
            <Button
              variant="contained"
              onClick={() => navigate("/registro")}
              sx={{
                backgroundColor: "#97004F",
                "&:hover": { backgroundColor: "#7d0041" },
              }}
            >
              Registrarse
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default PublicNavbar;
