"use client"
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
      <div className="bg-black h-20 flex justify-center p-5">
        <ul className="flex flex-row text-white gap-4">
          <Link href="/">Home</Link>
          <Link href="/quiz">Take Quizz</Link>
          <Link href="/survey">Take Survey</Link>
        </ul>
      </div>
  );
};

export default Navbar;
