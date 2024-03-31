import PropTypes from "prop-types";

const Task = ({todos ,setTodos}) => {
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index , 1)
        console.log(newTodos)
        setTodos(newTodos)
      }
    
      const handleDone = (index) => {
        const newTodos = [...todos];
        const add = newTodos[index]
        newTodos.splice(index , 1 ,<del>{add}</del>)
        console.log(newTodos)
        setTodos(newTodos)
      }
      
  return (
    <div className="mt-7">
    {todos.map((todo, index) => (
        <div key={index} className="flex justify-between my-2 mx-2">
          <li className="list-disc capitalize">{todo}</li>
          <div>
            <button className="mr-5" onClick={() => handleDone(index)}>
              &#9989;
            </button>
            <button
              className="text-red-600"
              onClick={() => handleDelete(index)}
            >
              &#x274C;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Task.propTypes = {
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired
};

export default Task;
