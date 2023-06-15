import React from "react";
import { Grid } from "@mui/material";

import Project from "./Project";
import { projects } from "../resources/data";

function Projects() {
  return (
    <Grid
      container
      spacing={2}
      justifyItems={"center"}
      sx={{ margin: "0 auto" }}
    >
      {projects.map((project) => (
        <Project data={project} key={project.name} />
      ))}
    </Grid>
  );
}

export default Projects;
