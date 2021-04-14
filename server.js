const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const wilderController = require("./controllers/Wilder");
const app = express();
const asyncHandler = require('express-async-handler')
 
express.get('/', asyncHandler(async (req, res, next) => {
    const bar = await foo.findAll();
    res.send(bar)
}))

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

function runAsyncWrapper(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}

// Routing

app.post("/api/wilder/create", runAsyncWrapper(wilderController.create));
app.get("/api/wilder/read", runAsyncWrapper(wilderController.read));
app.put("/api/wilder/update", wilderController.update);
app.delete("/api/wilder/delete", wilderController.delete);

// Start the server
app.listen(3000, () => console.log("Server started on 3000"));
