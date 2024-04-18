import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
    borderRadius: "16px",
    fontSize: "15px",
    minWidth: {
      xs: "174px",
      sm: "185px",
    },
    height: "50px",
    textTransform: "capitalize",
    "&:hover": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
    },
    "&:active": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
      color: "#fff",
    },
  },
};

export default styles;
