import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [] , onDeleteTaskButtonClick, onTaskCompleteChange } = props;

  const hasTasts = true;
  if (!hasTasts) {
    return <div className="todo__empty-message">No tasks yet</div>;
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        // TODO: add id to task and use it as key with destructuring task properties
        <TodoItem className="todo-item" {...task} key={task.id} onDeleteTaskButtonClick={onDeleteTaskButtonClick} onTaskCompleteChange={onTaskCompleteChange} />
      ))}
    </ul>
  );
};

export default TodoList;
