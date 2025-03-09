"use client";

import React from "react";
import { IRootState } from "@/store";
import { useSelector } from "react-redux";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  return (
    <div className={`${themeConfig.navbar} main-container min-h-screen text-black dark:text-white-dark`}>
      {" "}
      {children}
    </div>
  );
};

export default MainContainer;
