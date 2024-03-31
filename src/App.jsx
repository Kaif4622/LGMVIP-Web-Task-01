import { useState } from "react";
import "./App.css";
import Task from "./Task";
import Add from "./Add";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex justify-center items-center-center w-full h-auto my-20">
      <div className="flex flex-col w-96 bg-white rounded-xl p-7 ">
        {/* to do list logo */}
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-blue-950 text-center ">
            To-Do-List
          </h2>
        </div>
        {/* logo end here */}

         <Add todos={todos} setTodos={setTodos} />

        <Task todos={todos} setTodos={setTodos} /> 

      </div>
    </div>
  );
}

export default App;
