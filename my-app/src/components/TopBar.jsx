// import React from "react";
// import { AppBar, Toolbar, Button, Box } from "@mui/material";

// const navLinks = [
//   "Home",
//   "Community & Forum",
//   "Educational Content",
//   "Contact Us",
// ];

// export default function TopBar() {
//   return (
//     <AppBar
      // position="static"
      // elevation={0}
      // sx={{
      //   bgcolor: "transparent",
      //   boxShadow: "none",
      //   pt: 2,
      //   borderRadius: 50,
      //   textAlign: "center",
      //   alignContent: "center",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   mt: 2,
      //   width: "70%",
      //   mx: "auto",
      //   background:
      //     "linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(15, 15, 26, 1), rgba(239, 239, 239, 0.09))",
      //   backdropFilter: "blur(20px)",
      //   position: "relative",
      //   zIndex: 1,
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
//         <Box sx={{ flex: 1, display: "flex", gap: 4, ml: 8 }}>
//           {navLinks.map((link) => (
//             <Button
//               key={link}
//               color="inherit"
//               sx={{ fontWeight: 500, fontSize: 16, textTransform: "none" }}
//             >
//               {link}
//             </Button>
//           ))}
//         </Box>
//         <Button
//           variant="contained"
//           sx={{
//             bgcolor: "primary.main",
//             color: "#fff",
//             borderRadius: 3,
//             px: 3,
//             ml: 2,
//             py: 1.2,
//             fontWeight: 600,
//             fontSize: 16,
//             boxShadow: "0 4px 24px 0 rgba(162,89,255,0.3)",
//             textTransform: "none",
//             "&:hover": { bgcolor: "#b47aff" },
//           }}
//         >
//           Get Started
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React from 'react';
import { AppBar, Toolbar, Button, Box, Container, Paper } from '@mui/material';

const TopBar = () => {
  return (
    <AppBar position="static" sx={{background:'transparent',boxShadow: 'none', p:5,}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between', py: 1, fontFamily:'Aleo'  }}>
          {/* Left: Logo */}
          <Box display="flex" alignItems="center">
            <img src={process.env.PUBLIC_URL + '/Frame.png'} alt="FX Utopia" style={{ height: 30, marginRight: 8 }} />
          </Box>
          {/* Center: Navigation Buttons */}
          <Paper
            elevation={2}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 999,
              display: 'flex',
              background: 'linear-gradient(to right, #2a2e60, #4d4b7a)',
              border: '1px solid rgba(255,255,255,0.2)',
              bgcolor: "primary.main",
            color: "#fff",
             fontFamily:'Aleo' ,
            ml: 2,
            fontWeight: 600,
            fontSize: 16,
            boxShadow: "0 4px 24px 0 rgba(162,89,255,0.3)",
            textTransform: "none",
            "&:hover": { bgcolor: "#b47aff", fontFamily:'Aleo'  },
            }}
          >
            {['Home', 'Community & Forum', 'Educational Content', 'Contact Us'].map((text) => (
              <Button
                key={text}
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  fontSize: 14,
                  mx: 1,
                   fontFamily:'Aleo' ,
                  '&:hover': {
                    color: '#b388ff',
                     fontFamily:'Aleo', 
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Paper>

          {/* Right: Get Started Button */}
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #a855f7, #c084fc)',
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 500,
              px: 4,
              boxShadow: 3,
               fontFamily:'Aleo' ,
              '&:hover': {
                background: 'linear-gradient(to right, #9333ea, #a855f7)',
              },
            }}
          >
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;