import { Box, Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value, icon, accent = "#97004F" }) {
  return (
    <Card
      sx={{
        border: "1px solid rgba(151, 0, 79, 0.1)",
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={600}
              mb={0.5}
            >
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={900} color={accent}>
              {value}
            </Typography>
          </Box>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "14px",
              backgroundColor: "rgba(151, 0, 79, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: accent,
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;
