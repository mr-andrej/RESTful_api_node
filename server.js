const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const wilderController = require("./controllers/Wilder");
const app = express();

// Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

// Middleware?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder/create", wilderController.create);
app.post("/api/wilder/update", wilderController.update);
app.get("/api/wilder/retrieve", wilderController.retrieve);
app.delete("/api/wilder/delete", wilderController.delete);

// Start the server
app.listen(3000, () => console.log("Server started on 3000"));
