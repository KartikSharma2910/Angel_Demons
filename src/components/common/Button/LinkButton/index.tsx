import { Box, SxProps } from "@mui/material";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import SimpleButton from "../SimpleButton";
import styles from "./styles";

type LinkButtonProps = ComponentProps<typeof SimpleButton> & {
  to?: string;
  prefetch?: boolean;
  customStyles?: SxProps;
};
const LinkButton = ({ to, customStyles, ...rest }: LinkButtonProps) => {
  return to ? (
    <Link to={to}>
      <Box>
        <SimpleButton
          variant="outlined"
          sx={{ ...styles.linkButton, ...customStyles } as SxProps}
          {...rest}
        />
      </Box>
    </Link>
  ) : (
    <SimpleButton {...rest} />
  );
};

export default LinkButton;
