const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();

mongoose
  .connect(
    "mongodb+srv://Hamzah:hamzahpassword@cluster0-20vtk.mongodb.net/contactsDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log("Error in DB connectioon " + err));
const contactsRoute = require("./routes/contacts");

app.use(express.json({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("You hyave reached / route");
});

app.use("/contacts", contactsRoute);

app.listen(3000, (res, err) => {
  if (err) throw err;
  console.log("Server running...");
});
