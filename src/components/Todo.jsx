import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {

  // the logic of deleting a task must 
  // be implemented in the parent component, 
  // because the child component is not aware of the state of the tasks

  const tasks = [
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
  ];

  const deleteAllTasks = () => {
    console.log('Delete all tasks');
  }

  const deleteTask = (taskId) => {
    console.log(`Delete task with id ${taskId}`);
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Toggle task with id ${taskId} to ${isDone ? 'done' : 'not done'}`);
  }

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  }

  const addTask = () => {
    console.log('Add task');
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList tasks={tasks} onDeleteTaskButtonClick={deleteTask} onTaskCompleteChange={toggleTaskComplete}   />
    </div>
  );
};

export default Todo;
