"use client";
import Nav from "@/Components/nav";
import React from "react";
import { ReactTyped } from "react-typed";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodos, removeTodos } from "../redux/todosSlice";
import { useSelector } from "react-redux";
const Hello = () => {
  const [todo, setTodo] = useState("");
  const [firstName, setFirstName] = useState("");

  const todosData = useSelector((todo) => todo.userTodos.todos);
  // console.log(todosData);
  const dispatch = useDispatch();
  const todoData = () => {
    console.log(todo, firstName);
    dispatch(addTodos({ todo, firstName }));
  };
  return (
    <div>
      <Nav />
      <h1>Contact Page</h1>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <ReactTyped
        strings={["Enter Name"]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </ReactTyped>

      <button onClick={todoData}>Add todo</button>
      {todosData.map((item) => {
        return (
          <>
            <div
              key={item.id}
              style={{
                background: "pink",
                width: "20vw",
                display: "flex",
                gap: "4px",
              }}
            >
              <h3>
                {item.todo} {item.firstName}
              </h3>
              <button onClick={() => dispatch(removeTodos(item.id))}>
                Remove Todo
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Hello;
