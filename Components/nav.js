import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <Link href={"/"}>Home</Link>
      <Link href={"/aboutus"}>About</Link>
      <Link href={"/contactus"}>Contact</Link>
    </div>
  );
};

export default Nav;
