//Install express server
const express = require("express");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/angular-app-heroku"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular-app-heroku/" })
);

// Start the app by listening on the default Heroku port
app.listen(7000);
