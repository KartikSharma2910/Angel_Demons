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

  imageWrapper: {
    display: "flex",
    position: "relative",
    width: "100%",
  },

  image: {
    width: "100%",
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
};

export default styles;
