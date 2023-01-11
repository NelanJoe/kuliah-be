const express = require("express");
const cors = require("cors");
const router = require("./routes/api");

const app = express();
/**
 * * Definisikan PORT aplikasi
 * * Menggunakan PORT :=> 8000
 * */
const PORT = process.env.PORT || 8000;

/**
 * * Menambahkan middleware
 */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 * * route get index & mengirimkan message json berikut:
 * * "Hello, World👋"
 */
app.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "Hello, World👋",
  });
});

/**
 * * Import router
 */
app.use("/api", router);

/**
 * * Listening server
 */
app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
