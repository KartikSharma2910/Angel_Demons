import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    rowGap: "20px",
    justifyContent: "center",
  },

  headerWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },

  icon: {
    color: "white",
    fontSize: {
      xs: "25px",
      sm: "35px",
    },
  },

  imageWrapper: {
    display: "flex",
    position: "relative",
    width: "100%",
  },

  image: {
    width: "100%",
    cursor: "pointer",
    height: {
      xs: "100%",
      sm: "300px",
      md: "100%",
    },
    objectFit: "cover",
    objectPosition: "center",
  },

  textWrapper: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    textAlign: "center",
    left: "50%",
    top: "70%",
    transform: "translate(-50%,-50%)",
  },

  heading: {
    fontSize: {
      xs: "30px",
      sm: "40px",
    },
    fontWeight: 600,
    opacity: 0.6,
    textTransform: "uppercase",
  },

  description: {
    fontSize: "13px",
  },

  flippedWrapper: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: {
      xs: "50px",
      sm: "20px",
    },
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: {
      xs: "1.5rem",
      sm: "2.5rem",
      md: "1.5rem",
    },
  },

  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: {
      xs: "46%",
      sm: "33%",
      md: "28%",
    },
  },

  rotatedSquare: {
    width: {
      xs: "130px",
      sm: "160px",
      md: "220px",
    },
    height: {
      xs: "130px",
      sm: "160px",
      md: "220px",
    },
    transform: "rotate(45deg)",
    overflow: "hidden",
    bottom: -40,
    position: "relative",
    border: "1px solid #1FCFF140",
  },

  squareImageWrapper: {
    width: {
      xs: "130px",
      sm: "160px",
      md: "220px",
    },
    height: {
      xs: "130px",
      sm: "160px",
      md: "220px",
    },
    display: "flex",
    transform: "rotate(45deg)",
    overflow: "hidden",
    boxShadow: "10px 10px 20px #00C0FD26",
    position: "absolute",
  },

  squareImage: {
    position: "absolute",
    width: "141.42%",
    height: "141.42%",
    objectFit: "cover",
    objectPosition: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
};

export default styles;
