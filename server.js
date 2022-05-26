"use strict";

const app = require("express")();
const db = require("./src/db.json");
const images = require("./src/images.json");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get("/images", ({ query }, res) => {
  console.log(images);
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images;

  setTimeout(() => {
    return res.status(200).json(i);
  }, randomInterval(500, 1500));
});

app.post("/db", async (req, res) => {
  try {
    const { name, email, date_of_birth, favourite_colour, salary } =
      await req.body;
    const person = { name, email, date_of_birth, favourite_colour, salary };
    const newArr = db.push(person);
    res.sendStatus(201);

    console.log(db);
  } catch (error) {
    console.error("post person", error);

    res.sendStatus(500);
  }
});

app.listen(5000, () => {
  process.stdout.write("Server is available on http://localhost:5000/\n");
});
