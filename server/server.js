import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

let password = "123456";

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// To parse JSON
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
  if (req.method === "GET") {
    return next(); // allow GET without password
  }
  if (req.body.password == password) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/", (req, res) => {
  res.json({ name: "Ashim", age: 19, skills: "MERN" });
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
