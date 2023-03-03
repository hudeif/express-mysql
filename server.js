const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log("app running  on port ", port);
});
