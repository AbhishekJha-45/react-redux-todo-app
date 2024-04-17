"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: todo }));
    setTodo("");
  };
  return (
    <>
      <h1 className="text-xl text-center text-white bg-black pt-10 pb-5">
        Todos
      </h1>
      <form
        onSubmit={handlesubmit}
        className="text-white bg-black flex flex-col lg:flex-row px-2 py-3 gap-y-2 w-full justify-center gap-x-3"
      >
        <input
          type="text"
          placeholder="Add todo"
          name="Add Todo"
          className="text-black pl-3 py-1 border-2 border-red-700"
          value={todo}
          required
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 px-3 py-1 text-white active:bg-gray-700"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
