import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

function Project(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [imageStyle, setImageStyle] = React.useState({
    filter: "grayscale(0.7)",
  });

  const {
    name,
    category,
    year,
    img,
    githubURL,
    websiteURL,
    description,
    summery,
  } = props.data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMouseOver = () => {
    setImageStyle({ filter: "grayscale(0)" });
  };

  const handleMouseLeave = () => {
    setImageStyle({ filter: "grayscale(0.7)" });
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CardHeader title={name} subheader={`${category} - ${year}`} />
          <CardMedia
            id="projectImage"
            component="img"
            height="194"
            image={img}
            alt="Project image"
            sx={imageStyle}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {summery}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            aria-label="Go to website"
            color="secondary"
            disabled={websiteURL ? false : true}
            href={websiteURL}
            target="_blank"
          >
            <WebIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Check out on github"
            color="secondary"
            disabled={githubURL ? false : true}
            href={githubURL}
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default Project;
