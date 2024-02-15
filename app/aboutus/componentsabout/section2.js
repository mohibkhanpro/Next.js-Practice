"use client";
import { removeUsers } from "@/app/redux/slice";
import { REM } from "next/font/google";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Section2 = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        height: "40vh",
        border: "1px solid black",
        width: "40vw",
        marginTop: "10px",
        overflow: "scroll",
      }}
    >
      {" "}
      user details
      {userData.map((item) => {
        return (
          <ul key={item.id}>
            <li>
              {item.name}{" "}
              <button onClick={() => dispatch(removeUsers(item.id))}>
                remove
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Section2;
