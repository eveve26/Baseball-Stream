require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const app = express();
const allowedOrigins = [
    "https://eveve26.github.io",
    "http://localhost:5173",
];
app.set("trust proxy", 1);
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
// const addUser = require("./addUser");

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
        }),
        cookie: {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);


app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.get("", (req, res) => {
  res.json({ message: "get nothing is worckking" });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();