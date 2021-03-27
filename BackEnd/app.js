const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.send("Hello World! This is the backend project");
});

app.listen(8080);
