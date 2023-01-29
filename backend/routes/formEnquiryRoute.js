import express from 'express'
import { createFormEnquiry } from '../controllers/FormEnquiryController.js';

const router=express.Router();


import { isAuthenticatedUser, AuthenticatedRole } from "../middleware/auth.js";

router.post(
  "/formenquiry",
  createFormEnquiry
);

export default router;