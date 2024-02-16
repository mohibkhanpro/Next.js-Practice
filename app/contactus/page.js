"use client";
import Nav from "@/Components/nav";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodos } from "../redux/todosSlice";
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
      <input
        type="text"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <button onClick={todoData}>Add todo</button>

      {todosData.map((item) => {
        return (
          <>
            <h3 key={item.id}>{item.todo}</h3>
            <h3>{item.firstName}</h3>
          </>
        );
      })}
    </div>
  );
};

export default Hello;
