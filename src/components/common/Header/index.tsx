import { Box } from "@mui/material";
import { header } from "constant/header";
import { useResponsive } from "hooks/useResponsive";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import styles from "./styles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { screenType } = useResponsive();

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const color = isScrolled ? "#8C8C8C" : "white";

  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ ...styles.header, color }} onClick={() => navigate("/")}>
        ANGELS AND DEMONS
      </Box>
      {screenType === "TABLET" || screenType === "MOBILE" ? (
        <MobileHeader isScrolled={isScrolled} />
      ) : (
        <Box sx={styles.list}>
          {header.map(({ label, link }, index) => {
            return (
              <Box
                key={index}
                component="a"
                href={link}
                sx={{ ...styles.listItem, color }}
              >
                {label}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Header;
