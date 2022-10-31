import {
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  Typography,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import HomeCard from './HomeCard'
const theme = createTheme({
  palette: {
    primary: {
      main: "#0cf264",
    },
    secondary:{
      main:"#859CB3"
    }
  },
});
const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar style={{ backgroundColor: theme.primary }}>
          <Toolbar
            sx={{
              alignItems: "space-between",
              justifyContent: "space-between",
            }}
          >
            <MenuIcon
              style={{ padding: "10px" }}
              onClick={() => setOpen(true)}
            />
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)} >
              <ListItem>
                <ListItemAvatar>
                  <HomeIcon />
                </ListItemAvatar>
                <ListItemText primary="Home" sx={{ paddingRight: 5 }} />
              </ListItem>
            </Drawer>
            <Typography variant="h5" component={"h3"}>
              E-ULAVAN
            </Typography>
            <Box>
              <PostAddIcon style={{ padding: "10px" }} />
              <MarkEmailUnreadIcon style={{ padding: "10px" }} />
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <HomeCard />
      </ThemeProvider>
    </>
  );
};

export default Home;
