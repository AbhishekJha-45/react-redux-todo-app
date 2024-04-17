"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todoSlice";
import DeleteIcon from "@/assets/delete-icon.png";
import EditIcon from "../assets/edit.png";
import SaveIcon from "@/assets/save.png";
import Image from "next/image";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState("");

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo({ id, text: newText }));
    setEditedText("");
  };

  return (
    <>
      <div className="text-white flex flex-col bg-black lg:min-h-[100vh] min-h-[77.25vh] justify-start items-center gap-y-5 overflow-hidden">
        <ul className="flex flex-col gap-y-3 w-full px-2">
          {todos.todos?.map((todo, i) => {
            return (
              <li
                key={i}
                className="flex items-center lg:gap-x-3  justify-between bg-gray-700 px-2  py-2 h-auto"
              >
                {/* Display edited text input conditionally */}
                {editedText && editedText.id === todo.id ? (
                  <input
                    type="text"
                    value={editedText.text}
                    className="text-black py-1 pl-2 w-4/5 lg:w-full"
                    onChange={(e) =>
                      setEditedText({ id: editedText.id, text: e.target.value })
                    }
                  />
                ) : (
                  <p className="col-span-2">{todo.text}</p>
                )}
                <div className="flex gap-x-2">
                  {/* Conditionally render Edit button based on edit state */}
                  {editedText && editedText.id === todo.id ? (
                    <button
                      onClick={() =>
                        handleEditTodo(editedText.id, editedText.text)
                      }
                      className="min-w-[40px] py-1"
                    >
                      <Image
                        src={SaveIcon}
                        alt="Save icon"
                        width={40}
                        height={40}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        setEditedText({ id: todo.id, text: todo.text })
                      }
                      className="min-w-[40px] py-1"
                    >
                      {/* Edit */}
                      <Image src={EditIcon} alt="Edit" width={40} height={40} />
                    </button>
                  )}
                  <button
                    onClick={() => dispatch(removeTodo({ id: todo.id }))}
                    className="min-w-[40px]"
                  >
                    {/* Delete */}
                    <Image
                      src={DeleteIcon}
                      alt="Delete"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todos;
