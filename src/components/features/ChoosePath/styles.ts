import { Styles } from "types/common";

const styles: Styles = {
  modal: {
    "& .MuiModal-backdrop": {
      backdropFilter: "blur(10px)",
    },
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#041110",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    padding: 6,
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "350px",
    objectPosition: "top",
    objectFit: "cover",
    borderRadius: "12px 12px 0px 0px",
  },

  container: {
    width: "47%",
    borderRadius: "12px",
    backgroundColor: "#111613",
    border: "1px solid #4C5050",
  },

  cardContant: {
    display: "flex",
    padding: 4,
    width: "100%",
    borderRadius: "12px",
    backgroundColor: "#111613",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },

  contentHeading: { fontSize: "26px" },

  contentAbout: {
    fontSize: "12px",
    color: "#8C8C8C",
    textAlign: "center",
  },
};

export default styles;
