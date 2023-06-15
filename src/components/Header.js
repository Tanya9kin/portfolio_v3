import React from "react";
import { Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import profile_picture from "../resources/images/profile_picture.jpg";

const grid_container_style = {
  paddingTop: 5,
  paddingBottom: 5,
  margin: "0 auto",
  gap: 4,
  justifyContent: "center",
};

const profile_picture_style = {
  borderRadius: 50,
  boxShadow: 6,
  marginBottom: 1,
};

function Header() {
  return (
    <div>
      <Grid container sx={grid_container_style}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          justify="space-between"
          component="img"
          sx={profile_picture_style}
          src={profile_picture}
        ></Grid>
        <Grid item xs={11} sm={10} md={6} lg={5}>
          <Stack direction="column">
            <Typography variant="h2" sx={{ marginBottom: 2 }}>
              Hi, I'm Tanya
            </Typography>
            <Typography variant="h5" color="grey">
              A Technion Computer Science graduate, passionate about front-end
              web development, and dedicated to creating a great user experince
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
