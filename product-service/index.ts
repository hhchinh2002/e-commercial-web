import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
    res.json("Connected to product microservice");
  });
  
app.listen(3002, () => {
console.log("Product microservice started on port 3002");
});