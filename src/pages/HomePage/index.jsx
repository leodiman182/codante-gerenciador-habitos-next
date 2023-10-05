"use client";

import { MainContext } from "@/context/MainContext";
import { useContext } from "react";

export default function HomePage() {
  const { habitsList } = useContext(MainContext);

  return (
    <section>
      {habitsList.length ? (
        <div></div>
      ) : (
        <p className="text-[24px]">você não tem hábitos cadastrados</p>
      )}
    </section>
  );
}
