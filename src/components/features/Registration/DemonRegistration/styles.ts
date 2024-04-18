import { Styles } from "types/common";

const styles: Styles = {
  modal: {
    "& .MuiModal-root": {
      overflow: "auto",
    },

    "& .MuiModal-backdrop": {
      backdropFilter: "blur(10px)",
    },
  },

  wrapper: {
    backgroundColor: "#041110",
    position: "absolute",
    overflow: "auto",
    top: "50%",
    height: "90vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    padding: 6,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "40px",
  },

  heading: {
    textAlign: "center",
  },

  formWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "25px",
  },

  input: {
    width: "46%",
  },

  containerWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  text: {
    fontSize: "13px",
  },

  agreements: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  agreementHeading: {
    fontSize: "14px",
  },

  agreementDescription: {
    fontSize: "12px",
    color: "#8C8C8C",
  },

  agreementPoints: {
    fontSize: "12px",
    color: "#8C8C8C",
  },

  button: {
    background: "linear-gradient(to right, #FF6C6C 0%, #FF0000 100%)",

    "&:hover": {
      background: "linear-gradient(to right, #FF6C6C 0%, #FF0000 100%)",
    },

    "&:active": {
      background: "linear-gradient(to right, #FF6C6C 0%, #FF0000 100%)",
    },
  },
};

export default styles;
