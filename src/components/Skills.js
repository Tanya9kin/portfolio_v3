import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

function Skills() {
  return (
    <Paper elevation6 sx={{ marginTop: 2 }}>
      <Stack direction="row" justifyContent={"space-around"}>
        <i
          class="fa-brands fa-html5 fa-xl"
          style={{ color: "#051915", margin: 5, fontSize: "2em" }}
        ></i>
        <i
          class="fa-brands fa-css3-alt fa-xl"
          style={{ color: "#051915", margin: 5, fontSize: "2em" }}
        ></i>
        <i
          class="fa-brands fa-js fa-xl"
          style={{ color: "#051915", margin: 5, fontSize: "2em" }}
        ></i>
        <i
          class="fa-brands fa-github fa-xl"
          style={{ color: "#051915", margin: 5, fontSize: "2em" }}
        ></i>
      </Stack>
    </Paper>
  );
}

export default Skills;
