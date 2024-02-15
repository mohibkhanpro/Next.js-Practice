"use client";
import Nav from "@/Components/nav";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const jsonData = await response.json();
        setData(jsonData.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Nav />
      <h1>Home Page</h1>{" "}
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {data.slice(0, 10).map((users) => {
            return (
              <>
                <div key={users.id} style={{ display: "flex", gap: "12px" }}>
                  <Link href={`/${users.id}`}>
                    {" "}
                    <h6>{users.firstName}</h6>
                  </Link>
                  <h6>{users.address.coordinates.lat}</h6>
                </div>
              </>
            );
          })}
        </>
      )}
    </main>
  );
}
