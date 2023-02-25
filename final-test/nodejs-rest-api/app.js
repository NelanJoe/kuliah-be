/**
 * * Import module express, cors, router
 * */
const express = require("express");
const cors = require("cors");
const router = require("./routes/api");

const authRouter = require("./routes/auth.route");

/**
 * * Import protect
 * */
const { protect } = require("./middlewares/AuthMiddlewares");

/**
 * * Definisikan express
 * */
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
 * * Add Route Register & Login
 * */
app.use(authRouter);

/**
 * * Import router
 */
app.use("/api", protect, router);

/**
 * * Listening server
 */
app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
