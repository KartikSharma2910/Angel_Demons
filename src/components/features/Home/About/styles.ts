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
      mobile: "100%",
      laptop: "60%",
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
      mobile: "20%",
      tablet: "30%",
      laptop: "50%",
    },
    width: {
      mobile: "60%",
      tablet: "45%",
      laptop: "33%",
    },
    display: "flex",
    alignItems: {
      mobile: "center",
      laptop: "flex-end",
    },
    flexDirection: "column",
    gap: {
      mobile: "2rem",
      tablet: "3rem",
      laptop: "4rem",
    },
  },

  text: {
    fontSize: {
      mobile: "12px",
      tablet: "14px",
      laptop: "16px",
    },
    textAlign: {
      mobile: "center",
      laptop: "left",
    },
    color: "#8C8C8C",
  },
};

export default styles;
