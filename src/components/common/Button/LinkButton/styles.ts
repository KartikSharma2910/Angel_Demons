import { Styles } from "types/common";

const styles: Styles = {
  linkButton: {
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    fontSize: {
      xs: "12px",
      sm: "13px",
      md: "15px",
    },
    minWidth: {
      xs: "175px",
      sm: "180px",
    },
    height: {
      xs: "35px",
      md: "40px",
    },
    textTransform: "capitalize",
    "&:hover": {
      border: "1px solid white",
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      backgroundColor: "transparent",
    },
    "&:active": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      backgroundColor: "transparent",
      color: "#fff",
    },
  },
};

export default styles;
