import React from 'react';
import { Box, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TypeMessage from './TypingArea';

const Message = ({ message, isReceived, time }) => (
  <Box sx={{ display: 'flex', justifyContent: isReceived ? 'flex-start' : 'flex-end', mb: 1 }}>
    {isReceived && (
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ borderRadius: 3, bgcolor: '#D485FF', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 30, height: 30, mr: 1 }}>
          <AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: 15 }} />
        </Box>
      </Box>
    )}
    <Box sx={{ bgcolor: '#F0F4FF', borderRadius: 3, padding: 1, maxWidth: '70%' }}>
      <Typography sx={{ fontSize: 14 }}>
        {message}
      </Typography>
      <Typography sx={{ fontSize: 10, textAlign: 'right', mt: 0.5 }}>
        {time}
      </Typography>
    </Box>
    {!isReceived && (
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', ml: 1 }}>
        <Box sx={{ borderRadius: 3, bgcolor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 30, height: 30 }}>
          <AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: 15 }} />
        </Box>
      </Box>
    )}
  </Box>
);



const ChatBox = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'space-between' }}>
    <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 1 }}>
      <Message message="1960s with the release of Letraset sheets containing Lorem Ipsum passages, and" isReceived={true} time="10:30 AM" />
      <Message message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." isReceived={false} time="10:32 AM" />
      <Message message="1960s with the release of Letraset sheets containing Lorem Ipsum passages, and" isReceived={true} time="10:30 AM" />
      <Message message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." isReceived={true} time="10:32 AM" />
      <Message message="1960s with the release of Letraset sheets containing Lorem Ipsum passages, and" isReceived={true} time="10:30 AM" />
      <Message message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." isReceived={false} time="10:32 AM" />
      <Message message="1960s with the release of Letraset sheets containing Lorem Ipsum passages, and" isReceived={true} time="10:30 AM" />
      <Message message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." isReceived={false} time="10:32 AM" />
    </Box>
    <TypeMessage/>
  </Box>
);

export default ChatBox;
