import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: {
      mobile: "column",
      laptop: "row",
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
      mobile: "25px",
      tablet: "35px",
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
      mobile: "100%",
      tablet: "300px",
      laptop: "100%",
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
      mobile: "30px",
      tablet: "40px",
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
      mobile: "50px",
      tablet: "20px",
    },
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: {
      mobile: "1.5rem",
      tablet: "2.5rem",
      laptop: "1.5rem",
    },
  },

  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: {
      mobile: "46%",
      tablet: "33%",
      laptop: "28%",
    },
  },

  rotatedSquare: {
    width: {
      mobile: "130px",
      tablet: "160px",
      laptop: "220px",
    },
    height: {
      mobile: "130px",
      tablet: "160px",
      laptop: "220px",
    },
    transform: "rotate(45deg)",
    overflow: "hidden",
    bottom: -40,
    position: "relative",
    border: "1px solid #1FCFF140",
  },

  squareImageWrapper: {
    width: {
      mobile: "130px",
      tablet: "160px",
      laptop: "220px",
    },
    height: {
      mobile: "130px",
      tablet: "160px",
      laptop: "220px",
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
