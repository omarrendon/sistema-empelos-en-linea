import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Styles from "./Styles/Appbar.styles";

import { Link } from "react-router-dom";
// import Mapa from './Mapa';

function Appbar() {
  const classes = Styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  // MENU WEB
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/">
        Inicio
      </MenuItem>
      <MenuItem component={Link} to="/perfil">
        Mi Perfil
      </MenuItem>
      <MenuItem component={Link} to="/empleos">
        Mis Empleos
      </MenuItem>
    </Menu>
  );

  
  // MENU MOVIL
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/">
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <MenuIcon />
          </Badge>
        </IconButton>
        <p>Inicio</p>
      </MenuItem>

      <MenuItem component={Link} to="/perfil">
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <MenuIcon />
          </Badge>
        </IconButton>
        <p>Mi Perfil</p>
      </MenuItem>

      <MenuItem component={Link} to="/empleos">
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <MenuIcon />
          </Badge>
        </IconButton>
        <p>Mis Empleos</p>
      </MenuItem>
      <MenuItem component={Link} to="/empleos">
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <MenuIcon />
          </Badge>
        </IconButton>
        <p>Cerrar Sesión</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            component={Link}
            to="/"
          >
            Candidato
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar Empleo ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              component={Link}
              to="/"
            >
              Cerrar Sesión
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Appbar;
