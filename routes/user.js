import express from "express";
import { getAllUsers } from "../controllers/user.js";
import { registerUser } from "../controllers/user.js";
import { sampleUserIdFunction } from "../controllers/user.js";
import { getUserDetails } from "../controllers/user.js";
import { updateUserDetails } from "../controllers/user.js";
import { deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", registerUser);

router.get("/userId/sample", sampleUserIdFunction);

router
  .route("/userId/:_id")
  .get(getUserDetails)
  .put(updateUserDetails)
  .delete(deleteUser);

export default router;
