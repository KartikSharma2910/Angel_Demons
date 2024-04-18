import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  textContainer: {
    display: "flex",
    width: {
      xs: "90%",
      sm: "100%",
    },
    flexDirection: "column",
    gap: "30px",
    position: "absolute",
    left: "50%",
    top: "50%",
    textAlign: "center",
    transform: "translate(-50%,-40%)",

    "& .heading": {
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  heading: {
    fontSize: {
      xs: "16px",
      sm: "18px",
    },
    fontWeight: 500,
    background: "linear-gradient(98.88deg, #6C7BFF -2.99%, #00C2FF 102.28%)",
  },

  subHeading: {
    fontSize: {
      xs: "40px",
      sm: "60px",
      md: "70px",
    },
    fontWeight: 600,
  },

  description: {
    fontSize: {
      xs: "16px",
      sm: "18px",
    },
    fontWeight: 500,
  },

  carousalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    width: "300px",
    textTransform: "uppercase",
    borderRadius: "8px",
    margin: "0 auto",
  },
};

export default styles;
