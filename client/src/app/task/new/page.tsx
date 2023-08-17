"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Task {
  name: string;
  description: string;

}

const FormPage: React.FC = () => {
  const [newTask, setNewTask] = useState<Task>({
    name: "",
    description: "",
  });
  const router = useRouter();
  const createTask = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/task", newTask)
      console.log(response);
      if (response.status === 200) {
        router.push("/");
        router.refresh();
      }

    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newTask);
    await createTask();

  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold">
          Create Task
        </h1>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
          value={newTask.name}
        />
        <textarea
          name="description"
          id=""
          cols={10}
          rows={5}
          placeholder="description"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
          value={newTask.description}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default FormPage;