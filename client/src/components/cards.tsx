"use client";
import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../logic/carts';
import Link from 'next/link';
import Task from '@/logic/Task';


export const Cards = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const tasksData = await fetchTasks();
            setTasks(tasksData);
        };

        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-3 gap-8'>
            {tasks.map((task) => (
                <>
            
                    <Link key={task._id} href={`/tasks/${task._id}`}>
                        <div className='bg-gray-800 p-5 text-white rounded-md hover:cursor-pointer hover:bg-gray-700'>
                            <h3 className='text-2xl font-bold'>{task.name}</h3>
                            <p className='text-slate-300 break-word'>{task.description}</p>
                            <p className='text-slate-400 my-2'>
                                <span className='mr-1'>
                                    Created At:
                                </span>
                                {new Date(task.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </Link>
                </>
            ))}
        </div>
    );
};