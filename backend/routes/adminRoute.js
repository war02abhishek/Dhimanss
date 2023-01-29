import  express from "express";

import { registerUser,loginUser,logoutUser } from "../controllers/AdminController.js";
import { isAuthenticatedUser, AuthenticatedRole } from "../middleware/auth.js";

const router=express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout",logoutUser)

export default router;