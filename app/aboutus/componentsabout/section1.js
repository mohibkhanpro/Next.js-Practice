"use client";
import { addUsers } from "@/app/redux/slice";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Section1 = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const getValue = () => {
    dispatch(addUsers(name));
  };
  return (
    <div
      style={{
        height: "20vh",
        border: "1px solid black",
        width: "40vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "12px",
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={getValue}>add user</button>
      </div>
    </div>
  );
};

export default Section1;
