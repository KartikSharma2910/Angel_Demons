import { Box, Button, InputBase } from "@mui/material";
import { footer, footerIcons } from "constant/footer";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.upperFooter}>
        <Box sx={styles.subscribe}>Subscribe Newsletters</Box>
        <Box sx={styles.inputContainer}>
          <InputBase placeholder="Enter Your Email" sx={styles.input} />
          <Button sx={styles.button}>Subscribe Now</Button>
        </Box>
      </Box>
      <Box sx={styles.lowerFooter}>
        <Box sx={styles.footerMapper}>
          <Box sx={styles.linkWrapper}>
            {footer.map((item, index) => (
              <Box key={index} sx={styles.link}>
                {item}
              </Box>
            ))}
          </Box>
          <Box sx={styles.linkWrapper}>
            {footerIcons.map((icon, index) => (
              <Box key={index} sx={styles.icon}>
                {icon}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={styles.divider} />
        <Box sx={styles.footerMapper}>
          <Box sx={styles.copyright}>
            © 2024 Angels and Demons. All Rights Reserved.
          </Box>
          <Box sx={styles.brand}>ANGELS AND DEMONS</Box>
          <Box sx={styles.policy}>
            <Box>Terms of Service </Box>
            <Box>Privacy Policy</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
