import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

const router: Router = Router();
const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
