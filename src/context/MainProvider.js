import { useState } from "react";
import { MainContext } from "./MainContext";

export default function MainProvider({ children }) {
  const [habitsList, setHabitsList] = useState([]);

  const value = { habitsList, setHabitsList };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
