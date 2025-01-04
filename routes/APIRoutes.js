import express from "express";
import UserControllers from "../controllers/UserControllers.js";

const router = express.Router();

// APIs
router.get("/", UserControllers.home);
router.get("/users", UserControllers.users);

export default router;
