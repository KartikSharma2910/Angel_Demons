import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },

  leftBox: {
    width: {
      xs: "100%",
      md: "60%",
    },
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transform: "scaleX(-1)",
  },

  rightBox: {
    position: "absolute",
    left: {
      xs: "20%",
      sm: "30%",
      md: "50%",
    },
    width: {
      xs: "60%",
      sm: "45%",
      md: "33%",
    },
    display: "flex",
    alignItems: {
      xs: "center",
      md: "flex-end",
    },
    flexDirection: "column",
    gap: {
      xs: "2rem",
      sm: "3rem",
      md: "4rem",
    },
  },

  text: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
    textAlign: {
      xs: "center",
      md: "left",
    },
    color: "#8C8C8C",
  },
};

export default styles;
