import { Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { ComponentProps } from "react";
import styles from "./styles";

type SimpleButtonProps = ComponentProps<typeof Button> & {
  label: string;
  customStyles?: SxProps;
};

const SimpleButton = ({
  label,
  variant = "contained",
  customStyles,
  ...rest
}: SimpleButtonProps) => {
  return (
    <Button
      sx={{ ...styles.wrapper, ...customStyles } as SxProps}
      variant={variant}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default SimpleButton;
