import { Router } from "express";
import { taskController } from "../controllers/taskController";

const router = Router();

router.get("/", taskController.getAllTask);
router.post("/", taskController.createTask);
router.delete("/:id", taskController.deleteTask);
router.put("/:id", taskController.updateTask);

export default router
