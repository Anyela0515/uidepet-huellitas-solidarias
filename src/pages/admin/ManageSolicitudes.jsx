import {
  Box,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const solicitudes = [
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
];

const statusColor = {
  Pendiente: "warning",
  "En revisión": "info",
  Aprobada: "success",
  Rechazada: "error",
};

function ManageSolicitudesPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={900}>
          Solicitudes de adopción
        </Typography>
        <Typography color="text.secondary" mt={0.5}>
          Revisa y gestiona las solicitudes recibidas
        </Typography>
      </Box>

      <Card sx={{ border: "1px solid rgba(151, 0, 79, 0.1)" }}>
        <Box sx={{ p: 2.5 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Solicitante</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Mascota</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Fecha</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {solicitudes.map((row) => (
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
        </Box>
      </Card>
    </Box>
  );
}

export default ManageSolicitudesPage;
