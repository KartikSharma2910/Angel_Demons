import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: {
      mobile: "2rem",
      tablet: "3rem",
      laptop: "4rem",
    },
    width: "100%",
    height: "100vh",
    padding: "4rem 20px",
  },

  header: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontSize: {
      mobile: "14px",
      tablet: "16px",
    },
    color: "#1E6F7E",
  },

  description: {
    width: "100%",
    textAlign: "center",
    fontSize: {
      mobile: "20px",
      tablet: "30px",
    },
    fontWeight: 500,
  },
};

export default styles;
