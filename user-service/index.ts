import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
    res.json("Connected to user microservice");
  });
  
app.listen(3001, () => {
console.log("User microservice started on port 3001");
});