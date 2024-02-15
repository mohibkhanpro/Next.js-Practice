import Nav from "@/Components/nav";
import React from "react";
import Section1 from "./componentsabout/section1";
import Section2 from "./componentsabout/section2";

const page = () => {
  return (
    <div>
      <Nav />
      <h1>About Page</h1>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default page;

export function generateMetadata({ params }) {
  return {
    title: "About us",
  };
}
