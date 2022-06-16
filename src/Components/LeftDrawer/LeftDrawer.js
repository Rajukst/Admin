import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import UserList from "../DashboardComponents/UserList/UserList"
import MainDashboard from "../Dashboard-main/MainDashboard";
import Products from "../DashboardComponents/Products/Products"
import { Link, Route, Routes } from "react-router-dom";
import Login from "../DashboardComponents/Login/Login";
import Registration from "../DashboardComponents/Registration/Registration";

import "./LeftDrawer.css"

const drawerWidth = 240;

function LeftDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* sidebar started here */}

      {/* <NavLink
        className="hvr-underline-from-center navbar-NavLink nasted-nav"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "",
            backgroundColor: isActive ? "#3749BB" : "",
            textDecoration: "none",
            width: '80%',
            padding: '30px ',
          };
        }}
        to="user"
      >
        Dashboard
      </NavLink> */}
    <Link to="app"><button className="mt-2 my-buttons">Dashboard</button></Link>
    <Link to="user"><button className="mt-2 my-buttons">User</button></Link>
    <Link to="products"><button className="mt-2 my-buttons">Products</button></Link>
    <Link to="blogs"><button className="mt-2 my-buttons">Blogs</button></Link>
    <Link to="/login"><button className="mt-2 my-buttons">Login</button></Link>
    <Link to="/registration"><button className="mt-2 my-buttons">Registration</button></Link>
      {/* sidebar closes here */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
      
        <Route path="app" element={<MainDashboard />} />
        <Route path="user" element={<UserList />} />
        <Route path="products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      </Box>
    </Box>
  );
}

LeftDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LeftDrawer;
