import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    width: "100%",
    height: "100vh",
    padding: "4rem 0px",
  },

  header: {
    display: "flex",
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
    fontSize: "30px",
    fontWeight: 500,
  },
};

export default styles;
