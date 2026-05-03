import express from "express"
import { loginUser, registerUser, profile } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile", protect, profile);

export default authRouter;

