import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// To parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ name: "Ashim", age: 19, skills: "MERN" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ success: true, data: req.body });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
