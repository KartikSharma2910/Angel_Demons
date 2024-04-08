import { Box } from "@mui/material";
import Slide from "@mui/material/Slide";
import { SxProps } from "@mui/system";
import React, { useRef } from "react";
import styles from "./styles";

type CountDownProps = {
  numbers: number[];
  direction: "up" | "down";
  timeout?: number;
  startTransition: boolean;
  customStyles?: SxProps;
};

const CountDown = ({
  numbers,
  direction,
  timeout = 1000,
  startTransition,
  customStyles,
}: CountDownProps) => {
  const containerRef = useRef(null);
  return (
    <Box
      ref={containerRef}
      sx={{ ...styles.wrapper, ...customStyles } as SxProps}
    >
      <Slide
        direction={direction}
        timeout={timeout}
        in={startTransition}
        easing="linear"
        container={containerRef.current}
      >
        <Box
          sx={{
            ...styles.numberWrapper,
            bottom: direction === "up" ? "unset" : -42 * (numbers.length - 1),
            top: direction === "up" ? -42 * (numbers.length - 1) : "unset",
          }}
        >
          {numbers.map((item, idx) => (
            <Box
              className="number"
              key={`${item}-unset` + idx}
              sx={styles.number}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Slide>
    </Box>
  );
};

export default CountDown;
