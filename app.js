const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/book");

mongoose.connect("mongodb+srv://Olivier:Olivier.@atlascluster.2c8xmmi.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => console.log("Connexion à MongoDB réussi !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/book", bookRoutes);

module.exports = app;
