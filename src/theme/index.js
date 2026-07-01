import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#97004F",
      dark: "#7d0041",
      light: "#b8337a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f3e8ee",
    },
    background: {
      default: "#f6f2f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#5f4b55",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ed6c02",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h4: { fontWeight: 800 },
    h5: { fontWeight: 800 },
    h6: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(80, 0, 45, 0.08)",
        },
      },
    },
  },
});

export default theme;
