import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

import StatCard from "../components/StatCard";
import { useLocalStorage } from "../storage/useLocalStorage";

const monthlyActivity = [
  { month: "Ene", adopciones: 4 },
  { month: "Feb", adopciones: 6 },
  { month: "Mar", adopciones: 5 },
  { month: "Abr", adopciones: 8 },
  { month: "May", adopciones: 7 },
  { month: "Jun", adopciones: 9 },
];

const recentRequests = [
  {
    id: 1,
    solicitante: "María González",
    mascota: "Luna",
    fecha: "28/06/2026",
    estado: "Pendiente",
  },
  {
    id: 2,
    solicitante: "Carlos Ruiz",
    mascota: "Max",
    fecha: "27/06/2026",
    estado: "En revisión",
  },
  {
    id: 3,
    solicitante: "Ana Torres",
    mascota: "Michi",
    fecha: "25/06/2026",
    estado: "Aprobada",
  },
  {
    id: 4,
    solicitante: "Pedro Sánchez",
    mascota: "Rocky",
    fecha: "24/06/2026",
    estado: "Pendiente",
  },
];

const statusColor = {
  Pendiente: "warning",
  "En revisión": "info",
  Aprobada: "success",
};

function DashboardPage() {
  const navigate = useNavigate();
  const user = useLocalStorage.get("user");
  const maxActivity = Math.max(...monthlyActivity.map((item) => item.adopciones));

  useEffect(() => {
    if (!user) {
      navigate("/ingreso");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={900} color="#1f1f1f">
          Dashboard Fundación
        </Typography>
        <Typography color="text.secondary" mt={0.5}>
          Resumen de actividad de {user.nombre}
        </Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Mascotas en adopción"
            value="24"
            icon={<PetsIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Solicitudes pendientes"
            value="8"
            icon={<PendingActionsIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Adopciones exitosas"
            value="15"
            icon={<CheckCircleIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Interesados activos"
            value="32"
            icon={<FavoriteIcon />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)", height: "100%" }}>
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight={800} mb={2}>
                Actividad mensual
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 1,
                  height: 180,
                  px: 1,
                }}
              >
                {monthlyActivity.map((item) => (
                  <Box
                    key={item.month}
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: 36,
                        height: `${(item.adopciones / maxActivity) * 100}%`,
                        minHeight: 24,
                        borderRadius: "8px 8px 4px 4px",
                        background:
                          "linear-gradient(180deg, #97004F 0%, #b8337a 100%)",
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {item.month}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, lg: 7 }}>
          <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)" }}>
            <CardContent sx={{ p: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography variant="h6" fontWeight={800}>
                  Solicitudes recientes
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#97004F",
                    color: "#97004F",
                    "&:hover": {
                      borderColor: "#7d0041",
                      backgroundColor: "rgba(151, 0, 79, 0.04)",
                    },
                  }}
                >
                  Ver todas
                </Button>
              </Box>

              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>Solicitante</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Mascota</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Fecha</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentRequests.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>{row.solicitante}</TableCell>
                        <TableCell>{row.mascota}</TableCell>
                        <TableCell>{row.fecha}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.estado}
                            size="small"
                            color={statusColor[row.estado] ?? "default"}
                            variant="outlined"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardPage;
