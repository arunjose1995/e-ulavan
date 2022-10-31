import React from "react";
import { Grid, Button } from "@mui/material";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const HomeCard = () => {
  return (
    <Grid
      container
      style={{
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item md={6}>
        <Card style={{ backgroundColor: "#1DD455" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                component={"h5"}
                style={{ textAlign: "center", color: "#FFFFFF" }}
              >
                CHOOSE YOUR ROLE
              </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                  sx={{ display: "inline-block", width: "70%",marginLeft:'80px',marginTop:'40px' }}
                >
                  MANUFACTURER
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                  sx={{ display: "inline-block", width: "70%",marginLeft:'80px',marginTop:'40px',marginBottom:'40px' }}
                >
                  BUYER
                </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeCard;
