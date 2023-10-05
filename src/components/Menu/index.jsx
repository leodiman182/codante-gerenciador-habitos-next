"use client";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";

export default function Menu() {
  const [value, setValue] = useState("home");

  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#171717",
        borderTop: "1px #262626 solid",
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon color="pink" />}
      />
      <BottomNavigationAction
        label="Add habit"
        value="add"
        icon={<AddIcon />}
      />
      <BottomNavigationAction
        label="Calendar"
        value="calendar"
        icon={<CalendarMonthIcon />}
      />
    </BottomNavigation>
  );
}
