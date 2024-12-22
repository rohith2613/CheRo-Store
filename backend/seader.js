import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import houses from "./data/houses.js";
import User from "./models/userModel.js";
import House from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleHouses = houses.map((house) => {
      return { ...house, user: adminUser };
    });
    await House.insertMany(sampleHouses);
    console.log("Data Imported!".green.inverse);
    process.exit();
  }
  catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}
