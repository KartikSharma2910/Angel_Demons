import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    width: "100%",
    position: "relative",
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "transparent",
      color: "#189EB8",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    justifyContent: "space-between",
    display: {
      sm: "flex",
      alignItems: "center",
    },
  },

  label: {
    fontSize: {
      xs: "10px",
      sm: "14px",
    },
    color: "white",
  },

  checkBox: {
    width: {
      xs: "15px",
      sm: "20px",
    },
    height: {
      xs: "15px",
      sm: "20px",
    },
    filter: "contrast(0%)",
    color: "white",
  },

  toggle: {
    justifyContent: "center",
    width: {
      xs: "100%",
      sm: "auto",
    },
    color: "custom.label",
  },

  btn: {
    display: "flex",
    justifyContent: "space-between",
    width: "80px",
    height: "40px",
    fontSize: "14px",
    border: "none",
    background: "transparent",
    marginTop: {
      xs: "15px",
      sm: "0px",
    },
    "&:hover": {
      background: "transparent",
    },
  },
};

export default styles;
