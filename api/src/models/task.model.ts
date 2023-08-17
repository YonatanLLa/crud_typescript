import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

export const TaskModel = model('TaskModel', taskSchema)
