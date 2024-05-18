import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
      const db = await mongoose.connect(process.env.MONGODB_URI || "");
      return db;
  } catch (error) {
      console.error(error);
      process.exit(1); // Exit process with failure
  }
};

connectDb();

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event handler for connection errors
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Event handler for when the connection is disconnected
db.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

export default db;