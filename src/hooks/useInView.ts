import { useEffect, useState } from "react";
import useScrollState from "./useScrollState";

const useInView = (id: string, offset = 200) => {
  const [inView, setInView] = useState<boolean>(false);
  const [, scrollPos] = useScrollState(0);

  useEffect(() => {
    const getView = (id: string) => {
      const windowHeight = window?.innerHeight;
      const element = window?.document?.getElementById(id);
      const domRect = element?.getBoundingClientRect();
      if (
        domRect &&
        (domRect.top < offset ||
          windowHeight > domRect.top + domRect.height - offset)
      ) {
        return true;
      } else return false;
    };
    if (!inView) setInView(getView(id));
  }, [scrollPos, id, offset, inView]);

  return [inView] as const;
};

export default useInView;
