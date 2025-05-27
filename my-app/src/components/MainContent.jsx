import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, IconButton, Divider, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const replies = [
  {
    user: 'Pawansingh143',
    avatar: 'P',
    question: 'Is forex trading real or a scam?',
  },
  {
    user: 'Christinandih',
    avatar: 'C',
    question: 'Where do I go to start the forex lessons for beginners?',
  },
  
];

export default function MainContent() {
  return (
    <div className='row'>
        <div className='col-6'>
            <Box sx={{ p: 5, color: 'text.primary', width: '80' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, fontFamily:'Aleo'}}>
        <ButtonBack />
        <Typography variant="h4" sx={{ fontWeight: 600, ml: 2, fontFamily:'Aleo' }}>
          About the Beginner Questions category
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Typography variant="body1" sx={{ color: 'text.secondary', mr: 4, fontFamily:'Aleo'  }}>
          Total Discussions: 1/308
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: 'green', mr: 2 }}>S</Avatar>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily:'Aleo'  }}>
          System
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily:'Aleo'  }}>
          May 2025
        </Typography>
      </Box>
      <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, mb: 3, fontFamily:'Aleo'  }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 2, fontFamily:'Aleo'  }}>
            This forum is for forex beginners. If you are new to forex and have a question, this is the best place to ask it. If you're looking to learn forex, get your training and education at the School of Pipsology.
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, fontFamily:'Aleo'  }}>
              2 Replies
            </Typography>
            <Box sx={{ flex: 1 }} />
            <IconButton color="inherit" size="small">
              <FavoriteIcon sx={{ fontSize: 20, mr: 0.5 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontFamily:'Aleo'  }}>152</Typography>
            </IconButton>
            <IconButton color="inherit" size="small">
              <ContentCopyIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontFamily:'Aleo'  }}>Copy</Typography>
            </IconButton>
          </Box>
          <Stack spacing={2}>
            {replies.map((reply) => (
              <Box key={reply.user} sx={{ display: 'flex', alignItems: 'center', fontFamily:'Aleo'  }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2, fontFamily:'Aleo'  }}>{reply.avatar}</Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, fontFamily:'Aleo'  }}>{reply.user}</Typography>
                  <Typography variant="body2" sx={{ fontFamily:'Aleo' }}>{reply.question}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb:2 }}>
        <Avatar sx={{ bgcolor: 'purple', mr: 2 }}>T</Avatar>
        <Typography variant="h6" sx={{ fontWeight: 500 , fontFamily:'Aleo' }}>
          TradeDin
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily:'Aleo'  }}>
          Jun 2025
        </Typography>
      </Box>
      <Card sx={{ bgcolor: 'background.paper', borderRadius: 4, mb: 3 }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 2, fontFamily:'Aleo'  }}>
            Any ideas on the best platforms to practice on? From the UK
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, fontFamily:'Aleo'  }}>
              2 Replies
            </Typography>
            <Box sx={{ flex: 1 }} />
            <IconButton color="inherit" size="small">
              <FavoriteIcon sx={{ fontSize: 20, mr: 0.5 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontFamily:'Aleo'  }}>152</Typography>
            </IconButton>
            <IconButton color="inherit" size="small">
              <ContentCopyIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontFamily:'Aleo'  }}>Copy</Typography>
            </IconButton>
          </Box>
          {/* <Stack spacing={2}>
            {replies.map((reply) => (
              <Box key={reply.user} sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{reply.avatar}</Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{reply.user}</Typography>
                  <Typography variant="body2">{reply.question}</Typography>
                </Box>
              </Box>
            ))}
          </Stack> */}
        </CardContent>
      </Card>
    </Box>
        </div>
    </div>
  );
}

function ButtonBack() {
  return (
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        bgcolor: 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        mr: 2,
      }}
    >
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Box>
  );
} 