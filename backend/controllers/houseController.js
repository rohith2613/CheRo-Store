import asyncHandler from "../middleware/asyncHandler.js"
import House from "../models/productModel.js";


// @desc Get all houses
// @route GET /houses
// @access Public

const getHouses = asyncHandler(
  async (req, res) => {
    const houses = await House.find({});
    res.json(houses);
  }
);

// @desc Get house by ID
// @route GET /houses/:id
// @access Public
const getHouseById = asyncHandler(
  async (req, res) => {
    const id = req.params.id;
    const house = await House.findById(id);
    if (house) {
      res.json(house);
    } else {
      res.status(404);
      throw new Error("House not found");
    }
  }

);

export { getHouses, getHouseById };



