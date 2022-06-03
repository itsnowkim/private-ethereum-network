import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AssetList = () => {
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    setTokenList(['token1', 'token2', 'token3']);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label="token list items">
        <List>
          {tokenList.map((element, index) => {
            return (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={element} />
                    <ArrowForwardIosIcon
                      style={{ width: '12px', height: '12px' }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default AssetList;