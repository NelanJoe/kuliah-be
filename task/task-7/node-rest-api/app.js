// Import  express & routing
const express = require("express");
const router = require("./routes/api");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Membuat variable port
const PORT = process.env.APP_PORT || 8000;

// Routing home express
app.get("/", (req, res) => {
  res.json({
    message: "Hello, World👋",
  });
});

// Menggunakan routing (router) api
app.use("/api", router);

// Mendefinisikan port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
