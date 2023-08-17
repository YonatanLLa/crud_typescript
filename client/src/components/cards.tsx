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
                <Link key={task._id} href={`/tasks/${task._id}`}>
                    <div className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700'>
                        {typeof task.name === 'string' ? task.name : 'Invalid name type'}
                    </div>
                </Link>
            ))}
        </div>
    );
};