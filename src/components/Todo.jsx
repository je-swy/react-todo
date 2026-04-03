import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
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
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
