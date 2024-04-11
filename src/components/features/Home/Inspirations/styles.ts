import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  container: {
    display: {
      mobile: "none",
      laptop: "block",
    },
    width: "40%",
    height: "100%",
    overflow: "hidden",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    justifyContent: "center",
    width: {
      mobile: "100%",
      laptop: "60%",
    },
    height: "100%",
    overflow: "hidden",
    padding: "15px 25px",
  },

  heading: {
    fontSize: "14px",
    color: "#8C8C8C",
    textAlign: "center",
  },

  cardsContainer: {
    display: "flex",
    gap: "25px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default styles;
