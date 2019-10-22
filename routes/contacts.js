const express = require("express");
const router = express.Router();

const Contact = require("../models/contacts");

router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const phone = req.body.phone;
    const type = req.body.type;
    const email = req.body.email;
    const userId = req.body.userId;
    const newContact = new Contact({
      name,
      phone,
      type,
      email,
      userId
    });
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).send("Server error " + err);
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).send("Server error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    res.status(500).send("Server error " + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const name = req.body.name;
    const phone = req.body.phone;
    const type = req.body.type;
    const email = req.body.email;
    const userId = req.body.userId;
    const updatedContact = await Contact.updateOne(
      { _id: req.params.id },
      {
        name,
        phone,
        email,
        type,
        userId
      }
    );
    res.json(updatedContact);
  } catch (err) {
    res.status(500).send("Server error " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.json("Contact deleted");
  } catch (err) {
    res.status(500).send("Server error " + err);
  }
});

module.exports = router;
