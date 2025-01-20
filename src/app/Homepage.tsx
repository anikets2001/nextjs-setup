"use client"
import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Homepage = () => {
  const router = useRouter()
  return (
    <div className="border border-red-100">
      <Header />
      HomePage
      <button type="button" onClick={() => router.push("/blog")}>
        Blog
      </button>
      <Image src={'/nextjs-icon.png'} width={100} height={100} alt="logo"/>
    </div>
  );
};

export default Homepage;
