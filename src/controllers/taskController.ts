import { Request, Response } from "express";
import { taskService } from "../services";

export const taskController = {

    getAllTask: async (req: Request, res: Response) => {
        try {
            const data = await taskService.getAll();

            res.status(200).json(data);

        } catch (error) {
            res.status(500).json({
                error: (error as Error).message
            });

        }
    },
    createTask: async (req: Request, res: Response) => {
        try {
            const {name, description} = req.body;
            const data = await taskService.create({name, description});
            res.status(201).json(data);
        }
        catch (error) {
            res.status(500).json({
                error: (error as Error).message
            });
        }
    },
    updateTask: async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const {name, description} = req.body;
        const data = await taskService.update(id, {name, description});
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({
          error: (error as Error).message
        })
      }  
    },
    deleteTask: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const data = await taskService.delete(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({
                error: (error as Error).message
            });
            
        }
    }

}