'use client'
import Link from "next/link";
import { useEffect } from "react";
import { getRecipes } from "../../api";

export default function Home() {
  useEffect (() => {
    const res = getRecipes()
    console.log(res)
  }, [])
  return (
   <main>
    <h1>Hello</h1>
    <Link href='/photos' >Photos</Link>
    
   </main>
  );
}
