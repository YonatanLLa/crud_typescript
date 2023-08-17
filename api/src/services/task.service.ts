import { TaskModel } from './../models/task.model';
// import { TaskModel  } from "../models"
export const taskService = {
    getAll: async  () =>  {
        return await TaskModel.find();   
    },
    getAllById: async (id: string) => {
        return await TaskModel.findById(id);
    },
    
    create:  async (body: object) => {
        return await TaskModel.create(body);
    },
    update: async (id: string, body: object) => {
        return await TaskModel.findByIdAndUpdate(id, body);
    },
    delete: async (id: string) => {
        return await TaskModel.findByIdAndDelete(id);
    }
}

