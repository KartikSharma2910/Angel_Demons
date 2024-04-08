import { Styles } from "types/common";

const styles: Styles = {
  linkButton: {
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    fontSize: {
      mobile: "12px",
      tablet: "13px",
      laptop: "15px",
    },
    minWidth: {
      mobile: "175px",
      tablet: "180px",
    },
    height: {
      mobile: "35px",
      laptop: "40px",
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
