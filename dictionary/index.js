const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
const getWord = require("./word");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dict.html"));
});

app.post("/search", (req, res) => {
  let { word } = req.body;
  getWord(word)
    .then((def) => {
      if (!def || def.length == 0) throw "Word Not found";
      res.status(200).send(def);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`Dictionary app listening at http://localhost:${port}`);
});
