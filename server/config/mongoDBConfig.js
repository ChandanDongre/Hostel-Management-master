import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../models/user.js";

const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;

    let conn;
    try {
      // Trying to connect to the real dbms
      conn = await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      // Fallback if real dbms is not running locally
      console.log(`Failed to connect to real DB. Starting local MongoDB Memory Server as fallback...`);
      const mongoServer = await MongoMemoryServer.create();
      mongoUri = mongoServer.getUri();
      conn = await mongoose.connect(mongoUri);
      console.log(`Memory Server running at ${mongoUri}`);
    }
    const adminExists = await User.findOne({ email: "admin@example.com" });
    if (!adminExists) {
      await User.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "password123", /* Auto hashed in User model */
        isAdmin: true,
      });
      console.log("Default Admin User created! Email: admin@example.com, Password: password123");
    }

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
