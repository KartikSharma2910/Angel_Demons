import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
  },

  leftContainer: {
    display: {
      mobile: "none",
      laptop: "block",
    },
    width: "40%",
  },

  rightContainer: {
    width: {
      mobile: "100%",
      laptop: "60%",
    },
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "3%",
  },

  heading: {
    textAlign: "center",
    color: "#8C8C8C",
  },

  divider: {
    width: "100%",
    height: "1px",
    opacity: 0.3,
    backgroundColor: "#8C8C8C",
  },

  stepsMapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  steps: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  infoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    right: 20,
    top: 30,
    fontSize: "14px",
    color: "#8C8C8C",
    backgroundColor: "#111716",
    transform: "rotate(12deg)",
    width: "220px",
    height: "150px",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default styles;
