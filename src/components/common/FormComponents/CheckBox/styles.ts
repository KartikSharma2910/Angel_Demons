import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "transparent",
      color: "custom.label",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    display: {
      sm: "flex",
    },
  },

  label: {
    fontSize: {
      xs: "10px",
      sm: "14px",
    },
    color: "custom.label",
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
