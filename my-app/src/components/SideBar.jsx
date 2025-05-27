// import React from 'react';
// import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// const categories = [
//   'Beginner Questions',
//   'Candlesticks, Chart Patterns',
//   'Trading Psychology',
//   'Trading Discussion',
//   'Chart Art',
//   'News and Economy',
//   'Risk Management',
//   'Trade Journals',
//   'Prop Firms',
//   'Trading Lifestyle',
//   'Free Forex Trading',
//   'Expert Advisors and Bots',
//   'Introduce Yourself',
//   'Trader Q&As',
//   'Announcements',
// ];

// const activeIndex = 0;

// export default function Sidebar() {
//   return (
//     <Drawer
//       variant="permanent"
//       PaperProps={{
//         sx: {
//           width: 260,
//           bgcolor: '#23244a',
//           border: 'none',
//           pt: 3,
//           pb: 3,
//         },
//       }}
//     >
//       <Box sx={{ px: 2, mb: 2 }}>
//         <img src={process.env.PUBLIC_URL + '/Frame.png'} alt="FX Utopia" style={{ width: 120, marginBottom: 24 }} />
//       </Box>
//       <List>
//         {categories.map((text, idx) => (
//           <ListItemButton
//             key={text}
//             selected={idx === activeIndex}
//             sx={{
//               mb: 1,
//               borderRadius: 3,
//               bgcolor: idx === activeIndex ? 'primary.main' : 'transparent',
//               color: idx === activeIndex ? '#fff' : 'text.primary',
//               '&:hover': {
//                 bgcolor: idx === activeIndex ? 'primary.main' : 'rgba(162,89,255,0.1)',
//               },
//             }}
//           >
//             <ListItemIcon>
//               <FiberManualRecordIcon sx={{ fontSize: 14, color: idx === activeIndex ? '#fff' : 'primary.main' }} />
//             </ListItemIcon>
//             <ListItemText
//               primary={<Typography variant="body1" noWrap>{text}</Typography>}
//             />
//           </ListItemButton>
//         ))}
//       </List>
//     </Drawer>
//   );
// } 

import React, { useState } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Typography,
  Box,
  Paper
} from '@mui/material';

const categories = [
  { label: 'Beginner Questions', color: '#c084fc' },         // Purple
  { label: 'Candlesticks, Charting', color: '#38bdf8' },     // Light Blue
  { label: 'Trading Psychology', color: '#38bdf8' },
  { label: 'Trading Discussion', color: '#38bdf8' },
  { label: 'Chart Art', color: '#38bdf8' },
  { label: 'News and Economy', color: '#38bdf8' },
  { label: 'Risk Management', color: '#38bdf8' },
  { label: 'Trade Journals', color: '#38bdf8' },
  { label: 'Prop Firms', color: '#38bdf8' },
  { label: 'Trading Lifestyle', color: '#38bdf8' },
  { label: 'Free Forex Trading', color: '#38bdf8' },
  { label: 'Expert Advisors and Bots', color: '#38bdf8' },
  { label: 'Introduce Yourself', color: '#22c55e' },         // Green
  { label: 'Trader Q&As', color: '#22c55e' },
  { label: 'Announcements', color: '#22c55e' },
  { label: 'Community Feedback', color: '#22c55e' },
  { label: 'Broker Discussion', color: '#6366f1' },          // Indigo
  { label: 'Trading Tech and Tools', color: '#6366f1' },
  { label: 'MarketMilk', color: '#6366f1' },
  { label: 'Cryptocurrency In Trading', color: '#6366f1' },
  { label: 'Bitcoin Discussion', color: '#a855f7' },         // Violet
  { label: 'Altcoin Discussion', color: '#a855f7' },
  { label: 'Global Markets', color: '#a855f7' },
  { label: 'Commodities Oil and Gold', color: '#a855f7' },
  { label: 'Stocks and Indexes', color: '#a855f7' },
  { label: 'Broker Support', color: '#ef4444' },             // Red
  { label: 'Analysts', color: '#f97316' },                   // Orange
  { label: 'Scam Stories', color: '#f97316' },
  { label: 'The Lobby', color: '#facc15' },                  // Yellow
];

const SideBar = () => {
  const [selected, setSelected] = useState(categories[0].label);

  return (
    <Paper sx={{ bgcolor: 'transparent', filter:'blur(8px)', WebkitFilter:'blur(0px)' , fontFamily:'Aleo' , p: 5, borderRadius: 8, width: 250, mt:8, alignItems: 'center', display: 'flex', flexDirection: 'column', marginLeft:'50px' }}>
      <FormControl>
        <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: 'transparent',
                background:'none',
                maxHeight: '30',
                color: 'black',
                fontFamily:'Aleo' 
              },
            },
          }}
          sx={{
            background: 'linear-gradient(to bottom, rgba(232, 211, 255, 0.7) 0%, rgba(185, 109, 255, 0.9) 30%, rgba(170, 84, 255, 0.95) 60%, rgba(160, 70, 255, 0.9) 100%)',
            color: '#fff',
             fontFamily:'Aleo' ,
            borderRadius: 70,
            '.MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
               fontFamily:'Aleo' ,
               gap: 1,
                m:'auto',
            },
            '& fieldset': { borderColor: 'black', fontFamily:'Aleo'  },
          }}
        >
          {categories.map((cat) => (
            <MenuItem
              key={cat.label}
              value={cat.label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                 fontFamily:'Aleo' ,
                my: 0.5,
                mt: 1,
                bgcolor: selected === cat.label ? '#a855f7' : 'transparent',
                '&:hover': {
                  bgcolor: 'none',
                   fontFamily:'Aleo' 
                },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: cat.color,
                   fontFamily:'Aleo',
                }}
              />
              <Typography variant="body2" color="#fff">
                {cat.label.length > 24 ? cat.label.slice(0, 22) + '...' : cat.label}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default SideBar;