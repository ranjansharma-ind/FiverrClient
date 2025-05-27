import React from "react";
import './App.css';
import MainContent from "./components/MainContent";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import TopBar from "./components/TopBar";
import Sidebar from "./components/SideBar";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a259ff",
    },
    background: {
      default: "#18192a",
      paper: "#23244a",
    },
    text: {
      primary: "#fff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TopBar/>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          background:
            "transparent",
          fontFamily:'Aleo, sans-serif'
        }}
      >
        <Sidebar />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MainContent/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
