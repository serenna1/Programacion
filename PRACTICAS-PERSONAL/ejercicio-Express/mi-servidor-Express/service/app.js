import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Esto es un get  ");
});
const port = 3000;
app.listen(port, () => {
  console.log("Api funcionando en http://localhost:" + port);
});
