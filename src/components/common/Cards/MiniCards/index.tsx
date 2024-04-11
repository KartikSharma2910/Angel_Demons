import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, IconButton } from "@mui/material";
import styles from "./styles";

export type MiniCardsProps = {
  imageUrl: string;
  position: string;
  userName: string;
  description: string;
};

const MiniCards = ({
  imageUrl,
  position,
  userName,
  description,
}: MiniCardsProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.image} component="img" src={imageUrl} alt="user" />
      <Box sx={styles.position}>{position}</Box>
      <Box sx={styles.userName}>{userName}</Box>
      <Box sx={styles.description}>{description}</Box>
      <Box sx={styles.iconWrapper}>
        <IconButton sx={styles.iconCover}>
          <TwitterIcon sx={styles.icon} />
        </IconButton>
        <IconButton sx={styles.iconCover}>
          <MusicNoteOutlinedIcon sx={styles.icon} />
        </IconButton>
        <IconButton sx={styles.iconCover}>
          <LinkedInIcon sx={styles.icon} />
        </IconButton>
        <IconButton sx={styles.iconCover}>
          <EmailOutlinedIcon sx={styles.icon} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MiniCards;
