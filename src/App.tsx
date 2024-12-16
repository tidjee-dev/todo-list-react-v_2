import { useEffect, useState } from "react";
import { Task } from "./interfaces";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === Number(taskId)
          ? {
              ...task,
              status: task.status === "completed" ? "in-progress" : "completed",
            }
          : task
      )
    );
  };

  const handleRemoveTask = (taskId: number) => {
    const taskToRemove = tasks.find((task) => task.id === Number(taskId));
    if (!taskToRemove) return;

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== Number(taskId))
    );
  };

  return (
    <div className="dark:bg-dark dark:text-light text-dark bg-light">
      <Header />
      <main className="h-[calc(100vh-6rem-5rem)] overflow-auto container mx-auto grid grid-cols-1 laptop:grid-cols-[1fr,2fr] gap-4 laptop:gap-6">
        <TaskForm addTask={handleAddTask} tasks={tasks} />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={() => handleToggleTaskCompletion}
          removeTask={() => handleRemoveTask}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
