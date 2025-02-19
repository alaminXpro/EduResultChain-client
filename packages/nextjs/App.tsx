"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import Loading from "@/components/layouts/loading";
import { getTranslation } from "@/i18n";
import { IRootState } from "@/store";
import {
  toggleAnimation,
  toggleLayout,
  toggleMenu,
  toggleNavbar,
  toggleRTL,
  toggleSemidark,
  toggleTheme,
} from "@/store/themeConfigSlice";
import { useDispatch, useSelector } from "react-redux";

function App({ children }: PropsWithChildren) {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();
  const { initLocale } = getTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem("theme") || themeConfig.theme));
    dispatch(toggleMenu(localStorage.getItem("menu") || themeConfig.menu));
    dispatch(toggleLayout(localStorage.getItem("layout") || themeConfig.layout));
    dispatch(toggleRTL(localStorage.getItem("rtlClass") || themeConfig.rtlClass));
    dispatch(toggleAnimation(localStorage.getItem("animation") || themeConfig.animation));
    dispatch(toggleNavbar(localStorage.getItem("navbar") || themeConfig.navbar));
    dispatch(toggleSemidark(localStorage.getItem("semidark") || themeConfig.semidark));
    // locale
    initLocale(themeConfig.locale);

    setIsLoading(false);
  }, [
    dispatch,
    initLocale,
    themeConfig.theme,
    themeConfig.menu,
    themeConfig.layout,
    themeConfig.rtlClass,
    themeConfig.animation,
    themeConfig.navbar,
    themeConfig.locale,
    themeConfig.semidark,
  ]);

  return (
    <div
      className={`${(themeConfig.sidebar && "toggle-sidebar") || ""} ${themeConfig.menu} ${themeConfig.layout} ${
        themeConfig.rtlClass
      } main-section relative font-nunito text-sm font-normal antialiased`}
    >
      {isLoading ? <Loading /> : children}
    </div>
  );
}

export default App;
