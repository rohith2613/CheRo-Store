import express from "express";
const router = express.Router();
import { getHouses,getHouseById } from "../controllers/houseController.js";


router.route("/").get(getHouses);
router.route("/:id").get(getHouseById);







export default router;
