"use client"
import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter()
  return (
    <div className="border border-red-100">
      <Header />
      HomePage
      <button type="button" onClick={() => router.push("/blog")}>
        Blog
      </button>
    </div>
  );
};

export default Homepage;
