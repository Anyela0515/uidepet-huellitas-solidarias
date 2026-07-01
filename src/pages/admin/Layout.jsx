import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetsIcon from "@mui/icons-material/Pets";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useLocalStorage } from "../../storage/useLocalStorage";
import logoUide from "../../assets/logo-uide.png";

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#ffffff",
  color: "#1f1f1f",
  boxShadow: "0 1px 8px rgba(80, 0, 45, 0.08)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      borderRight: "1px solid rgba(151, 0, 79, 0.08)",
      backgroundColor: "#ffffff",
    },
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  })
);

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
  { name: "Mascotas", path: "/admin/mascotas", icon: <PetsIcon /> },
  { name: "Solicitudes", path: "/admin/solicitudes", icon: <AssignmentIcon /> },
];

export default function LayoutPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useLocalStorage.get("user");

  const handleLogout = () => {
    useLocalStorage.delete("user");
    navigate("/ingreso");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f6f2f4" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={[{ mr: 2 }, open && { display: "none" }]}
            >
              <MenuIcon sx={{ color: "#97004F" }} />
            </IconButton>
            <Typography variant="h6" fontWeight={800} color="#97004F">
              Panel de Fundación
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar sx={{ width: 36, height: 36, bgcolor: "#97004F", fontSize: 14 }}>
              {user?.nombre?.charAt(0) ?? "F"}
            </Avatar>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant="body2" fontWeight={700}>
                {user?.nombre ?? "Fundación"}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Cuenta fundación
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            minHeight: 72,
            px: open ? 2.5 : 1,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            borderBottom: "1px solid rgba(151, 0, 79, 0.08)",
          }}
        >
          <Box
            component="img"
            src={logoUide}
            alt="Logo UIDE"
            sx={{ width: 40, height: 40, objectFit: "contain" }}
          />
          {open && (
            <Box>
              <Typography
                variant="caption"
                fontWeight={800}
                color="#97004F"
                display="block"
                lineHeight={1.2}
              >
                UidePet
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Huellitas Solidarias
              </Typography>
            </Box>
          )}
        </Box>

        <DrawerHeader>
          <IconButton onClick={() => setOpen((prev) => !prev)}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <List sx={{ px: 1, flex: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: "block", mb: 0.5 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    borderRadius: "12px",
                    mx: 0.5,
                  },
                  open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                  location.pathname === item.path && {
                    backgroundColor: "rgba(151, 0, 79, 0.1)",
                    "& .MuiListItemIcon-root": { color: "#97004F" },
                    "& .MuiListItemText-primary": {
                      color: "#97004F",
                      fontWeight: 700,
                    },
                  },
                ]}
              >
                <ListItemIcon
                  sx={[
                    { minWidth: 0, justifyContent: "center", color: "#5f4b55" },
                    open ? { mr: 2 } : { mr: "auto" },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List sx={{ px: 1, pb: 2 }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleLogout}
              sx={[
                { minHeight: 48, px: 2.5, borderRadius: "12px", mx: 0.5 },
                open ? { justifyContent: "initial" } : { justifyContent: "center" },
              ]}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyContent: "center", color: "#d32f2f" },
                  open ? { mr: 2 } : { mr: "auto" },
                ]}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Cerrar sesión"
                sx={[open ? { opacity: 1 } : { opacity: 0 }]}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
