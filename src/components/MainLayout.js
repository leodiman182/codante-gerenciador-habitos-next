"use client";
import { createTheme } from "@mui/material";
import Menu from "./Menu";
import { ThemeProvider } from "@emotion/react";
import Logo from "./Logo";
import Button from "./Button";
import { usePathname } from "next/navigation";
import MainProvider from "@/context/MainProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#45EDAD",
    },
    secondary: {
      main: "#F85858",
    },
    background: {
      main: "#171717",
    },
  },
});

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <MainProvider>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col justify-between h-screen px-[60px] py-[50px] pb-[100px]">
          <Logo />
          {children}
          {pathname !== "/new-habit" ? <Button text="novo hábito" /> : null}
        </div>
        <Menu />
      </ThemeProvider>
    </MainProvider>
  );
}
