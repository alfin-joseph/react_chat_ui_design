import React from 'react';
import { Box, FormControl, InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/system';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",  // Adjust width
  '& .MuiInputBase-root': {
    height: '40px',  // Adjust height of the input area
  },
}));

const TypeMessage = () => {
  return (
    <Box sx={{ mt: 'auto', p: 2, bgcolor: 'white', boxShadow: '0 -2px 5px rgba(0,0,0,0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <FormControl sx={{ flexGrow: 1, borderRadius: 2 }}>
            <CustomTextField
              label="type message here"
              sx={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SentimentSatisfiedAltOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Box sx={{ paddingLeft: 1 }}>
            <SendOutlinedIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>
  );
};

export default TypeMessage ;
