// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <header style={{ marginBottom: "5rem" }}>
      <Typography component="h1" variant="h3" sx={{ margin: "1rem 0" }}>
        Call a Friend
      </Typography>
      <Divider>
        <Typography component="h2" variant="subtitle1">
          Your friendly contact app
        </Typography>
      </Divider>
    </header>
  );
};

export default Header;
