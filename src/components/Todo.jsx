import { useState } from "react";

import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  // the logic of deleting a task must
  // be implemented in the parent component,
  // because the child component is not aware of the state of the tasks

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      isDone: false,
    },
    {
      id: 2,
      title: "Task 2",
      isDone: true,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Are you sure you want to delete all tasks?");
    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // don't mutate the state directly, create a new array without the deleted task and set it as the new state
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isDone }; // create a new task object with the updated isDone value
      }
      return task; // return the unchanged task
    }))
  };

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
