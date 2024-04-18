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
      xs: "80%",
      md: "50%",
    },
    zIndex: 10,
    position: "absolute",
    top: 150,
    right: {
      xs: 50,
      sm: 100,
      md: 50,
    },
  },

  heading: {
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    color: "#8C8C8C",
  },

  container: {
    display: "flex",
    rowGap: "30px",
    alignItems: {
      xs: "center",
      sm: "flex-start",
    },
    flexDirection: {
      xs: "column",
      sm: "row",
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
      xs: "30px",
      sm: "40px",
    },
    fontWeight: 600,
    color: "#1B5D7A",
  },

  text: {
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    fontWeight: 200,
    letterSpacing: "2px",
  },
};

export default styles;
