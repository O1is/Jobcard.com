const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ProfessionalModel = require("./models/Professionals");
require("dotenv").config();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const dbString = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/professionals", async (req, res) => {
  try {
    const professionals = await ProfessionalModel.find({});
    res.json(professionals);
  } catch (error) {
    console.error("Error fetching professionals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listing on port ${PORT}`);
});
