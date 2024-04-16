import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  imageContainer: {
    width: "60%",
    display: {
      mobile: "none",
      laptop: "block",
    },
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 2rem",
    gap: "20px",
    width: {
      mobile: "100%",
      laptop: "40%",
    },
    height: "100%",
  },

  heading: {
    fontSize: "60px",
    width: {
      mobile: "100%",
      laptop: "50%",
    },
    textTransform: "uppercase",
  },

  description: {
    fontSize: "20px",
    width: {
      mobile: "100%",
      laptop: "50%",
    },
    fontWeight: 200,
  },

  buttonWrapper: {
    display: "flex",
    gap: 3,
  },

  button: {
    minWidth: "130px",
  },
};

export default styles;
