import {
  Box,
  Button,
  Card,
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

import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const mascotas = [
  {
    id: 1,
    nombre: "Luna",
    especie: "Perro",
    raza: "Mestiza",
    edad: "2 años",
    estado: "Disponible",
  },
  {
    id: 2,
    nombre: "Michi",
    especie: "Gato",
    raza: "Siamés",
    edad: "1 año",
    estado: "En proceso",
  },
  {
    id: 3,
    nombre: "Rocky",
    especie: "Perro",
    raza: "Labrador",
    edad: "3 años",
    estado: "Disponible",
  },
  {
    id: 4,
    nombre: "Nina",
    especie: "Gato",
    raza: "Persa",
    edad: "4 años",
    estado: "Adoptada",
  },
];

const statusColor = {
  Disponible: "success",
  "En proceso": "warning",
  Adoptada: "info",
};

function ManageMascotasPage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={900}>
            Administrar Mascotas
          </Typography>
          <Typography color="text.secondary" mt={0.5}>
            Publica y gestiona las mascotas disponibles para adopción
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#97004F",
            "&:hover": { backgroundColor: "#7d0041" },
          }}
        >
          Publicar mascota
        </Button>
      </Box>

      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {mascotas.slice(0, 3).map((mascota) => (
          <Grid key={mascota.id} size={{ xs: 12, md: 4 }}>
            <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)" }}>
              <Box
                sx={{
                  height: 160,
                  background:
                    "linear-gradient(135deg, rgba(151,0,79,0.15), rgba(243,232,238,0.9))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h2" sx={{ opacity: 0.35 }}>
                  🐾
                </Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={800}>
                    {mascota.nombre}
                  </Typography>
                  <Chip
                    label={mascota.estado}
                    size="small"
                    color={statusColor[mascota.estado] ?? "default"}
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {mascota.especie} · {mascota.raza} · {mascota.edad}
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderColor: "#97004F",
                    color: "#97004F",
                  }}
                >
                  Ver más
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)" }}>
        <Box sx={{ p: 2.5 }}>
          <Typography variant="h6" fontWeight={800} mb={2}>
            Listado de mascotas
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Especie</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Raza</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Edad</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                  <TableCell sx={{ fontWeight: 700 }} align="right">
                    Acciones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mascotas.map((mascota) => (
                  <TableRow key={mascota.id} hover>
                    <TableCell>{mascota.nombre}</TableCell>
                    <TableCell>{mascota.especie}</TableCell>
                    <TableCell>{mascota.raza}</TableCell>
                    <TableCell>{mascota.edad}</TableCell>
                    <TableCell>
                      <Chip
                        label={mascota.estado}
                        size="small"
                        color={statusColor[mascota.estado] ?? "default"}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        size="small"
                        startIcon={<VisibilityOutlinedIcon />}
                        sx={{ mr: 1, color: "#97004F" }}
                      >
                        Ver
                      </Button>
                      <Button
                        size="small"
                        startIcon={<EditOutlinedIcon />}
                        sx={{ color: "#97004F" }}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </Box>
  );
}

export default ManageMascotasPage;
