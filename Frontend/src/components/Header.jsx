import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <div className="headerBtns">
            <Link to="/signup">
              <Button color="inherit">S'inscrire</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Connexion</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
