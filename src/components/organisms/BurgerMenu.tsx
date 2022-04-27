import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { HashLink } from 'react-router-hash-link';
import { ListItemText } from '@material-ui/core';

const BurgerMenu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <IconButton color="secondary" onClick={handleDrawerToggle}>
        <MenuIcon style={{ transform: 'scale(1.4)' }} />
      </IconButton>

      <Drawer
        anchor="right"
        // variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem>
            <HashLink to="#mission" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Mission" />
            </HashLink>
          </ListItem>
          <ListItem>
            <HashLink to="#products" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Products" />
            </HashLink>
          </ListItem>
          <ListItem>
            <HashLink to="#services" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Services" />
            </HashLink>
          </ListItem>
          <ListItem>
            <HashLink to="#research" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Research" />
            </HashLink>
          </ListItem>
          <ListItem>
            <HashLink to="#supporters" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Supporters" />
            </HashLink>
          </ListItem>
          <ListItem>
            <HashLink to="#announcements" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Announcements" />
            </HashLink>
          </ListItem>
          <ListItem>
            <HashLink to="#contact" smooth onClick={handleDrawerToggle}>
              <ListItemText primary="Contact" />
            </HashLink>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
