import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";
import StatCard from "../components/StatCard";
import hennryImage from "../assets/hennry.jpg";

const mascotasDestacadas = [
  { id: 1, nombre: "Luna", especie: "Perro", edad: "2 años" },
  { id: 2, nombre: "Michi", especie: "Gato", edad: "1 año" },
  { id: 3, nombre: "Rocky", especie: "Perro", edad: "3 años" },
];

function InicioPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f6f2f4" }}>
      <PublicNavbar />

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #f8f1f5 0%, #ffffff 45%, #f3e8ee 100%)",
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                fontWeight={900}
                color="#1f1f1f"
                lineHeight={1.15}
                mb={2}
              >
                Adopta con amor, ayuda con responsabilidad
              </Typography>
              <Typography color="text.secondary" fontSize="17px" lineHeight={1.7} mb={3}>
                Plataforma de vinculación académica para el bienestar animal.
                Explora mascotas en adopción, apoya a fundaciones y participa
                en procesos responsables.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate("/ingreso")}
                  sx={{
                    backgroundColor: "#97004F",
                    px: 3,
                    py: 1.2,
                    "&:hover": { backgroundColor: "#7d0041" },
                  }}
                >
                  Adoptar
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/registro-fundacion")}
                  sx={{
                    borderColor: "#97004F",
                    color: "#97004F",
                    px: 3,
                    py: 1.2,
                  }}
                >
                  Soy fundación
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={hennryImage}
                alt="Mascota en adopción"
                sx={{
                  width: "100%",
                  maxHeight: 420,
                  objectFit: "cover",
                  borderRadius: "24px",
                  boxShadow: "0 24px 70px rgba(80, 0, 45, 0.14)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={2.5} sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <StatCard title="Mascotas disponibles" value="48" icon={<PetsIcon />} />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <StatCard
              title="Adopciones exitosas"
              value="126"
              icon={<FavoriteIcon />}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <StatCard
              title="Fundaciones aliadas"
              value="18"
              icon={<VolunteerActivismIcon />}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" fontWeight={900} mb={2}>
          Explora mascotas en adopción
        </Typography>
        <Grid container spacing={2.5} sx={{ mb: 5 }}>
          {mascotasDestacadas.map((mascota) => (
            <Grid key={mascota.id} size={{ xs: 12, md: 4 }}>
              <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)" }}>
                <Box
                  sx={{
                    height: 180,
                    background:
                      "linear-gradient(135deg, rgba(151,0,79,0.12), rgba(243,232,238,0.95))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 48,
                  }}
                >
                  🐾
                </Box>
                <Box sx={{ p: 2.5 }}>
                  <Typography variant="h6" fontWeight={800}>
                    {mascota.nombre}
                  </Typography>
                  <Typography color="text.secondary" mb={2}>
                    {mascota.especie} · {mascota.edad}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate("/ingreso")}
                    sx={{
                      backgroundColor: "#97004F",
                      "&:hover": { backgroundColor: "#7d0041" },
                    }}
                  >
                    Ver más
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: 3,
                minHeight: 180,
                border: "1px solid rgba(151, 0, 79, 0.1)",
                background:
                  "linear-gradient(135deg, rgba(151,0,79,0.08), #ffffff)",
              }}
            >
              <Typography variant="h6" fontWeight={800} mb={1}>
                Apoyo continuo
              </Typography>
              <Typography color="text.secondary">
                Donaciones, voluntariado y hogares temporales para apoyar el
                bienestar animal en la comunidad universitaria.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: 3,
                minHeight: 180,
                border: "1px solid rgba(151, 0, 79, 0.1)",
                background:
                  "linear-gradient(135deg, rgba(151,0,79,0.08), #ffffff)",
              }}
            >
              <Typography variant="h6" fontWeight={800} mb={1}>
                Red de fundaciones
              </Typography>
              <Typography color="text.secondary">
                Conectamos refugios y organizaciones aliadas con adoptantes
                responsables bajo procesos académicos verificados.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InicioPage;
