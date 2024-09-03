import express from "express";
import router from "./routes/product-route";
import cors from "cors";

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());

app.get("/", (_req, res) => {
    res.json("Connected to product microservice");
});

app.use("/products", router);

app.listen(3002, () => {
  console.log("Product microservice started on port 3002");
});

export default app;