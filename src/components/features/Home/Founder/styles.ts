import { Styles } from "types/common";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    height: "100vh",
    padding: "4rem 20px",
  },

  tabContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "1.5rem 0px",
    width: {
      xs: "100%",
      md: "45%",
    },
    backgroundColor: "#101503",
    marginBottom: "2rem",
  },

  tab: {
    color: "#8C8C8C",
    letterSpacing: "1px",
    cursor: "pointer",
  },

  imageWrapper: {
    width: "80%",
  },

  image: {
    width: "100%",
    objectPosition: "center",
    objectFit: "cover",
  },

  description: {
    width: {
      xs: "100%",
      sm: "70%",
      md: "45%",
    },
    fontSize: "14px",
    textAlign: "center",
    color: "#8C8C8C",
  },
};

export default styles;
