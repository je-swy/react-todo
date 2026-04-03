import Field from "./Field";
import Button from "./Button";

const SearchTaskForm = () => {
  return (
    <form className="todo__form">
      <Field 
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
      />
    </form>
  );
};

export default SearchTaskForm