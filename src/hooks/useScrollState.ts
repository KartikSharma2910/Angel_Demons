import { debounce } from "@mui/material";
import { useState, useEffect, useCallback } from "react";

const useScrollState = (breakPoint: number) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const listenScrollEvent = useCallback(() => {
    if (window.scrollY > breakPoint) {
      setIsScrolled(true);
    } else setIsScrolled(false);
    setScrollPosition(window.scrollY);
    debounce((nextValue) => setScrollPosition(nextValue), 1000);
  }, [breakPoint]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [listenScrollEvent]);

  return [isScrolled, scrollPosition] as const;
};

export default useScrollState;
