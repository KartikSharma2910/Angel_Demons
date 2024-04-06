import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    color: "white",
    paddingBottom: "2rem",
  },

  upperFooter: {
    width: {
      mobile: "100%",
      tablet: "100%",
      laptop: "60%",
    },
    height: "150px",
    margin: "0 auto",
    display: "flex",
    flexDirection: {
      mobile: "column",
      laptop: "row",
    },
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    backgroundColor: "#D0E8F526",
  },

  subscribe: {
    fontSize: "16px",
    fontWeight: 200,
    color: "#8C8C8C",
  },

  inputContainer: {
    position: "relative",
  },

  input: {
    color: "white",
    borderRadius: "none",
    width: "400px",
    height: "60px",
    backgroundColor: "black",
    border: "none",
  },

  button: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: "10px 25px",
    height: "40px",
    color: "black",
    fontSize: "14px",
    backgroundColor: "#1B5D7A",
    "&:hover": {
      backgroundColor: "#1B5D7A",
    },
  },

  lowerFooter: {
    width: {
      mobile: "90%",
      laptop: "80%",
    },
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  footerMapper: {
    display: "flex",
    flexDirection: {
      mobile: "column",
      laptop: "row",
    },
    rowGap: "20px",
    alignItems: "center",
    justifyContent: "space-between",
  },

  divider: {
    width: "100%",
    height: "1px",
    opacity: 0.4,
    backgroundColor: "#1B5D7A",
  },

  linkWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },

  link: {
    fontSize: "13px",
    color: "#1B5D7A",
    cursor: "pointer",
  },

  icon: {
    color: "#1B5D7A",
  },

  copyright: {
    fontSize: "12px",
    color: "#1B5D7A",
  },

  brand: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  policy: {
    display: "flex",
    gap: "10px",
    fontSize: "12px",
    color: "#1B5D7A",
  },
};

export default styles;
