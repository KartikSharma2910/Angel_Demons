import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.4,
    objectPosition: "center",
  },

  users: {
    position: "absolute",
    left: 0,
    objectFit: "contain",
    width: "30%",
    transform: "scaleX(-1)",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    width: {
      mobile: "80%",
      laptop: "50%",
    },
    zIndex: 10,
    position: "absolute",
    top: 150,
    right: {
      mobile: 50,
      tablet: 100,
      laptop: 50,
    },
  },

  heading: {
    fontSize: {
      mobile: "12px",
      tablet: "14px",
    },
    color: "#8C8C8C",
  },

  container: {
    display: "flex",
    rowGap: "30px",
    alignItems: {
      mobile: "center",
      tablet: "flex-start",
    },
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
  },

  dataContainer: {
    display: "flex",
    flexWrap: "wrap",
  },

  numContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100px",
    textAlign: "center",
  },

  number: {
    fontSize: {
      mobile: "30px",
      tablet: "40px",
    },
    fontWeight: 600,
    color: "#1B5D7A",
  },

  text: {
    fontSize: {
      mobile: "12px",
      tablet: "14px",
    },
    fontWeight: 200,
    letterSpacing: "2px",
  },
};

export default styles;
