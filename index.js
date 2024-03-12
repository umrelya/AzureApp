const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Create a node.js Web application via Azure Web App using a code publishing model (local Git).");
});

app.listen(8080, () => {
  console.log("Running on port 8080...");
});

