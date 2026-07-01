import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import PublicNavbar from "../../components/PublicNavbar";
import { useLocalStorage } from "../../storage/useLocalStorage";

const misSolicitudes = [
  { id: 1, mascota: "Luna", fecha: "20/06/2026", estado: "En revisión" },
  { id: 2, mascota: "Michi", fecha: "10/05/2026", estado: "Aprobada" },
];

const statusColor = {
  Pendiente: "warning",
  "En revisión": "info",
  Aprobada: "success",
};

function PerfilPage() {
  const navigate = useNavigate();
  const user = useLocalStorage.get("user");

  const handleLogout = () => {
    useLocalStorage.delete("user");
    navigate("/");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f6f2f4" }}>
      <PublicNavbar />

      <Box sx={{ maxWidth: 960, mx: "auto", px: { xs: 2, md: 3 }, py: 4 }}>
        <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)", mb: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ width: 64, height: 64, bgcolor: "#97004F", fontSize: 24 }}>
                  {user?.nombre?.charAt(0) ?? "U"}
                </Avatar>
                <Box>
                  <Typography variant="h5" fontWeight={900}>
                    {user?.nombre}
                  </Typography>
                  <Typography color="text.secondary">{user?.correo}</Typography>
                  <Chip
                    label="Adoptante"
                    size="small"
                    sx={{ mt: 1, color: "#97004F", borderColor: "#97004F" }}
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Button
                variant="outlined"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)", height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <AssignmentIcon sx={{ color: "#97004F" }} />
                  <Typography variant="h6" fontWeight={800}>
                    Mis solicitudes
                  </Typography>
                </Box>
                {misSolicitudes.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1.5,
                      borderBottom: "1px solid rgba(151, 0, 79, 0.08)",
                    }}
                  >
                    <Box>
                      <Typography fontWeight={700}>{item.mascota}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.fecha}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.estado}
                      size="small"
                      color={statusColor[item.estado] ?? "default"}
                      variant="outlined"
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)", height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <FavoriteIcon sx={{ color: "#97004F" }} />
                  <Typography variant="h6" fontWeight={800}>
                    Acciones rápidas
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mb: 1.5,
                    backgroundColor: "#97004F",
                    "&:hover": { backgroundColor: "#7d0041" },
                  }}
                  onClick={() => navigate("/")}
                >
                  Explorar mascotas
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ borderColor: "#97004F", color: "#97004F" }}
                >
                  Nueva solicitud de adopción
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default PerfilPage;
