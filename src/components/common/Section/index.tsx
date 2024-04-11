import { Box, SxProps } from "@mui/material";
import React from "react";
import styles from "./styles";

type SectionProps = {
  id: string;
  heading: string;
  description?: React.ReactNode | string;
  children: React.ReactNode;
  customStyles?: SxProps;
};

const Section = ({
  id,
  heading,
  description,
  children,
  customStyles,
}: SectionProps) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{ ...styles.wrapper, ...customStyles } as SxProps}
    >
      <Box sx={styles.header}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
