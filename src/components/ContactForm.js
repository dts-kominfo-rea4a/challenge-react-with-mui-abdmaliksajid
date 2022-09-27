// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const ContactForm = ({ fnAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const defaultContact = { name: "", phone: "", email: "", photo: "" };
  const [newContact, setNewContact] = useState(defaultContact);
  const inputOnChangeHandler = (event) => {
    setNewContact({ ...newContact, [event.target.id]: event.target.value });
  };

  const formInputHandlet = (event) => {
    fnAddContact(newContact);
    event.preventDefault();
    setNewContact(defaultContact);
  };

  return (
    <Card sx={{ padding: "1.5rem 1rem 1rem", backgroundColor: "#F3F1EB" }}>
      <form id="contact-form" action="" style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={formInputHandlet}>
        <TextField id="name" label="Name" variant="filled" required value={newContact.name} onChange={inputOnChangeHandler} />
        <TextField id="phone" label="Phone" variant="filled" required value={newContact.phone} onChange={inputOnChangeHandler} />
        <TextField id="email" label="Email" variant="filled" required value={newContact.email} onChange={inputOnChangeHandler} />
        <TextField id="photo" label="Photo URL" variant="filled" required value={newContact.photo} onChange={inputOnChangeHandler} />
        <Button type="submit" variant="text" color="success" sx={{ alignSelf: "start", marginTop: "1rem", padding: 0 }}>
          ADD NEW
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
