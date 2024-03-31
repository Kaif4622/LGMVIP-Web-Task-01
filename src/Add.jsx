import PropTypes from "prop-types";
import { useRef } from "react";

const Add = ({ todos, setTodos }) => {
  const inputRef = useRef("");

  const handleAdd = (e) => {
    e.preventDefault();
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = "";
    console.log(todos);
  };

  return (
    <div className="flex justify-between">
      <input
        className="bg-gray-200 py-1 px-7 rounded-3xl"
        placeholder="Add your task"
        ref={inputRef}
      ></input>
      <button
        className="bg-orange-600 text-white rounded-3xl px-5"
        onClick={(e) => handleAdd(e)}
      >
        Add
      </button>
    </div>
  );
};

Add.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default Add;
