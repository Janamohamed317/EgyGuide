import React, { useState } from 'react';
import styles from './Admin.module.css';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  IconButton,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Admin_Dashboard_items } from '../../assets/assets';
import Users from '../Users/Users';
import Cities from '../Cities/Cities';

function Admin() {
  const [selectedComponent, setSelectedComponent] = useState('users')
  const [openSideBar, setOpenSideBar] = useState(false);

  const displayComponent = () => {
    switch (selectedComponent) {
      case 'users':
        return <Users />;
      case 'Places':
        return <Cities />;
      default:
        return <Users />;
    }
  };
  return (
    <div className={styles.main_container}>
      <IconButton onClick={() => setOpenSideBar(true)}>
        <MenuIcon sx={{ color: 'white', fontSize: '3rem' }} />
      </IconButton>
      <Drawer open={openSideBar} onClose={() => setOpenSideBar(false)}>
        <Box sx={{ width: '20rem', backgroundColor: 'beige', color: 'black', minHeight: '69.5rem' }}>
          {Admin_Dashboard_items.map((item) => (
            <List key={item.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setSelectedComponent(item.text)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText >{item.text}</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>

      {displayComponent()}
      
    </div>
  );
}

export default Admin;