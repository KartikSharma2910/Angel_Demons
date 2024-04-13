import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    padding: "3rem",
  },

  quoteWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "end",
    gap: "20px",
  },

  quote: {
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "24px",
  },

  quoteBy: {
    textAlign: "end",
    fontSize: "14px",
    width: "70%",
    margin: "0 auto",
  },

  contantBox: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
  },

  contentHeading: {
    fontSize: {
      mobile: "14px",
      tablet: "16px",
    },
    color: "#1E6F7E",
  },

  text: {
    textAlign: "center",
    width: "80%",
    margin: "0 auto",
    fontSize: "14px",
    color: "#8C8C8C",
  },

  overviewWrapper: {
    display: "flex",
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  overviewContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  overviewHeading: {
    fontSize: "14px",
    fontWeight: 200,
  },

  overviewData: {
    fontSize: "18px",
    fontWeight: 600,
  },

  contactWrapper: {
    display: "flex",
    width: "80%",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },

  contactsContent: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "30%",
  },

  contactText: {
    fontSize: "14px",
  },
};

export default styles;
