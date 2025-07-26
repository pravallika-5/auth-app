require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");


const app = express();
app.use(cors({
  origin: "https://auth-app-front-pied.vercel.app/"
}));
app.use(express.json());


// Connect to DB
connectDB();

// Routes
app.use("/api", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
