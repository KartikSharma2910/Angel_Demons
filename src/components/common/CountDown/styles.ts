import { SxProps } from "@mui/system";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    position: "relative",
    width: "30px",
    height: "42px",
    overflow: "hidden",
  },
  numberWrapper: {
    position: "absolute",
    lineHeight: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  number: {
    color: "custom.yellowLight",
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "600",
  },
};

export default styles;
