import axios from 'axios'
import Task from './Task'

export const fetchTasks = async (): Promise<Task[]> => {
    
    try {
        const res = await axios.get('http://localhost:5000/api/task')
        return res.data
    } catch (error) {
        console.log(error);
        return []
    }
}