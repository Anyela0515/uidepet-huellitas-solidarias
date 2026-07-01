import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ReportIcon from "@mui/icons-material/Report";

import { useLocalStorage } from "../storage/useLocalStorage";

const stats = [
  {
    title: "Mascotas en refugio",
    value: "24",
    icon: <PetsIcon sx={{ fontSize: 40, color: "#97004F" }} />,
  },
  {
    title: "Solicitudes de adopción",
    value: "8",
    icon: <FavoriteIcon sx={{ fontSize: 40, color: "#97004F" }} />,
  },
  {
    title: "Voluntarios activos",
    value: "15",
    icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: "#97004F" }} />,
  },
  {
    title: "Denuncias pendientes",
    value: "3",
    icon: <ReportIcon sx={{ fontSize: 40, color: "#97004F" }} />,
  },
];

function DashboardPage() {
  const navigate = useNavigate();
  const user = useLocalStorage.get("user");

  useEffect(() => {
    if (!user) {
      navigate("/ingreso");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    useLocalStorage.delete("user");
    navigate("/ingreso");
  };

  if (!user) {
    return null;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={900} color="#1f1f1f">
            Dashboard
          </Typography>
          <Typography color="#5f4b55" mt={0.5}>
            Bienvenido, {user.nombre}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
          sx={{ textTransform: "none", fontWeight: 700 }}
        >
          Cerrar sesión
        </Button>
      </Box>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                borderRadius: "16px",
                border: "1px solid rgba(151, 0, 79, 0.1)",
                boxShadow: "0 8px 24px rgba(80, 0, 45, 0.08)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography color="#5f4b55" fontSize="14px" mb={0.5}>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" fontWeight={900} color="#97004F">
                      {stat.value}
                    </Typography>
                  </Box>
                  {stat.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DashboardPage;
