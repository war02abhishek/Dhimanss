import express from 'express';

import {
  createEnquiry,
  getAllEnquiry,
  deleteEnquiry,
} from "../controllers/EnquiryController.js";
import { isAuthenticatedUser, AuthenticatedRole } from "../middleware/auth.js";
const router=express.Router();

router.post(
  "/newEnquiry",
  isAuthenticatedUser,
  AuthenticatedRole("admin"),
  createEnquiry
);
router.get("/allEnquiry",
getAllEnquiry);

router.delete(
  "/deleteEnquiry/:id",
  isAuthenticatedUser,
  AuthenticatedRole("admin"),
  deleteEnquiry
);

export default router;