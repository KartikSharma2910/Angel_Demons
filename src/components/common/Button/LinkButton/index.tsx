import { Box } from "@mui/material";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import SimpleButton from "../SimpleButton";
import styles from "./styles";

type LinkButtonProps = ComponentProps<typeof SimpleButton> & {
  to?: string;
  prefetch?: boolean;
};
const LinkButton = ({ to, ...rest }: LinkButtonProps) => {
  return to ? (
    <Link to={to}>
      <Box>
        <SimpleButton variant="outlined" sx={styles.linkButton} {...rest} />
      </Box>
    </Link>
  ) : (
    <SimpleButton {...rest} />
  );
};

export default LinkButton;
