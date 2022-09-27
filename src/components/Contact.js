// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <ListItem sx={{ borderBottom: "thin solid rgba(0, 0, 0, 0.12)", pl: 0, pr: 0, overflow: "hidden", flexWrap: "wrap" }}>
      <ListItemAvatar sx={{ margin: { xs: "0 auto 1rem", sm: "0 2.5rem 0 0" } }}>
        <Avatar alt={data.name} src={data.photo} sx={{ width: "5rem", height: "5rem" }} />
      </ListItemAvatar>
      <Box sx={{ flex: { xs: "100%", sm: 1 }, textAlign: { xs: "center", sm: "left" } }}>
        <ListItemText primary={data.name} />
        <ListItemText secondary={data.phone} />
        <ListItemText secondary={data.email} />
      </Box>
    </ListItem>
  );
};

export default Contact;
