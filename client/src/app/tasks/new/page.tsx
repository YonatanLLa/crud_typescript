"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

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
  const { id } = useParams();

  const getTaskById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/task/${id}`);
      console.log(response);
      setNewTask({
        name: response.data.name,
        description: response.data.description
      });
    } catch (error) {
      console.log(error);
    }
  }

  const createTask = () => {
    try {
      const response = axios.post("http://localhost:5000/api/task", newTask).then((response) => {

        if (response.status === 201) {
          router.push("/");
          router.refresh();
        }
      })


    } catch (error) {
      console.log(error);
    }
  }

  const updateTask = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/task/${id}`, newTask)
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
    if (!id) {
      createTask();
    } else {
      console.log("update");
      await updateTask();

    }

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
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await axios.delete(`http://localhost:5000/api/task/${id}`).then((response) => {
        setNewTask(response.data);
      });
      router.push("/");
      router.refresh();
    }

  }
  useEffect(() => {
    if (id) {
      getTaskById()
    }
    console.log(id);

  }, [])

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="text-3xl font-bold">
            {
              !id ? "Create New Task" : "Update Task"
            }
          </h1>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            onClick={handleDelete}
          >
            Delete
          </button>
        </header>

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
          {
            !id ? "Create Task" : "Update Task"
          }
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default FormPage;