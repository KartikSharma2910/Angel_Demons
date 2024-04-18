import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "components/common";
import { choosePath } from "constant/choosePath";
import styles from "./styles";

const ChoosePath = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} sx={styles.modal}>
      <Box sx={styles.wrapper}>
        <Box sx={{ opacity: 0.8 }}>Choose your path</Box>
        <Box sx={styles.card}>
          {choosePath.map(({ imageUrl, type, about, buttonRoute }, index) => {
            return (
              <Box key={index} sx={styles.container}>
                <Box sx={styles.imageWrapper}>
                  <Box
                    component="img"
                    src={imageUrl}
                    alt="investor"
                    sx={styles.image}
                  />
                </Box>
                <Box sx={styles.cardContant}>
                  <Box sx={styles.contentHeading}>{type}</Box>
                  <Box sx={styles.contentAbout}>{about}</Box>
                  <Button
                    as="LinkButton"
                    to={buttonRoute}
                    label="Register Now"
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Modal>
  );
};

export default ChoosePath;
