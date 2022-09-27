import "./App.css";

import React, { useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Grid from "@mui/material/Unstable_Grid2";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";

// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contact, setContact] = useState(contactsJSON);
  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container sx={{ margin: "3rem", gap: "3rem" }}>
        <Grid xs={12} md={4.9}>
          <ContactForm fnAddContact={addContact} />
        </Grid>
        <Grid xs={12} md={5.6} sx={{ margin: "0 auto", backgroundColor: "#DBF6F0", padding: "0.5rem 1rem", borderRadius: "4px" }} component="ul">
          {contact.map((contact) => {
            return <Contact data={contact} key={contact.phone + "-" + +new Date()} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
