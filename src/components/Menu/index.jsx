"use client";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/navigation";

export default function Menu() {
  const [value, setValue] = useState("home");

  const router = useRouter();

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        width: "100%",
        bottom: "0",
        backgroundColor: "#171717",
        borderTop: "1px #262626 solid",
        zIndex: "9999",
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        onClick={() => router.push("/")}
        label="Home"
        value="home"
        icon={<HomeIcon color="pink" />}
      />
      <BottomNavigationAction
        onClick={() => router.push("/new-habit")}
        label="Add habit"
        value="add"
        icon={<AddIcon />}
      />
      <BottomNavigationAction
        onClick={() => router.push("/calendar")}
        label="Calendar"
        value="calendar"
        icon={<CalendarMonthIcon />}
      />
    </BottomNavigation>
  );
}
