import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Skills from "./Skills";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b3f35",
    },
    secondary: {
      main: "#de0c57",
    },
    background: {
      default: "#edffef",
      paper: "#ffffff",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Projects />
        <Skills />
      </ThemeProvider>
    </div>
  );
}

export default App;
