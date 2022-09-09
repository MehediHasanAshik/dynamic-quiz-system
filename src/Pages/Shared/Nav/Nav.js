import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navStyle = {
    margin: "0 20px",
    textDecoration: "none",
    color: "black",
    fontWeight: 500,
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Dynamic Quiz
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <NavLink style={navStyle} to="/home">
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={navStyle} to="/admin">
            Admin
          </NavLink>
        </ListItem>
        <ListItem>
          {<small>{user.displayName}</small>} <br />

          {!user?.email ? (
            <Button
              style={{ background: "#F7DC6F" }}
              variant="outlined"
              size="small"
            >
              <NavLink style={navStyle} to="/login">
                Login
              </NavLink>
            </Button>
          ) : (
            <Button
              onClick={() => logout()}
              style={{ background: "#F7DC6F", margin: "0 5px" }}
              variant="outlined"
              size="small"
            >
              Logout
            </Button>
          )}
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: 500,
              display: { xs: "none", sm: "block" },
            }}
          >
            Dynamic Quiz System
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink style={navStyle} to="/home">
              HOME
            </NavLink>
            <NavLink style={navStyle} to="/admin">
              ADMIN
            </NavLink>

            {<small>{user.displayName}</small>}

            {!user?.email ? (
              <Button
                style={{ background: "#F7DC6F" }}
                variant="outlined"
                size="small"
              >
                <NavLink style={navStyle} to="/login">
                  Login
                </NavLink>
              </Button>
            ) : (
              <Button
                onClick={() => logout()}
                style={{ background: "#F7DC6F", margin: "0 5px" }}
                variant="outlined"
                size="small"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ py: 4 }}></Box>
    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
