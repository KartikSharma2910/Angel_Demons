import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  position: {
    fontSize: "15px",
    fontWeight: 500,
  },

  userName: {
    fontSize: "20px",
    fontWeight: 500,
  },

  description: {
    fontSize: "13px",
    textAlign: "center",
    color: "#8C8C8C",
  },

  iconWrapper: {
    display: "flex",
    gap: "15px",
  },

  iconCover: {
    backgroundColor: "#252525",
    "&:hover": {
      backgroundColor: "#252525",
    },
  },

  icon: {
    fontSize: "15px",
    color: "white",
  },
};

export default styles;
