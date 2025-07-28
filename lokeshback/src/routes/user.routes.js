import { Router } from "express";
import { userRegister, loginUser, getCurrentUser, logoutUser } from "../controllers/user.controller.js";

import {jwtAuth} from "../middelware/auth.middelware.js"

const router = Router()
router.post("/register",userRegister)
router.post("/login", loginUser)
// protected route
// get current user
router.get("/current-user", jwtAuth, getCurrentUser )
// logout
router.post("/logout", jwtAuth, logoutUser)

export default router
