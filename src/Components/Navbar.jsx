import { useTheme } from '@emotion/react';
import { Box, Button, AppBar, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const drawerWidth = 240;
const navItems = ['Home', 'Skills', 'Projects', 'Art', 'Contact'];

const Navbar = ({ window }) => {
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(false);
  const handleDrawerToggle = () => { setIsMobile((prevState) => !prevState); };

  const [activeBtn, setActiveBtn] = useState(0);
  const toggleActiveBtn = (idx) => {
    if (activeBtn === idx)
      return;

    setActiveBtn(idx);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Diego Barrales
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={item} disablePadding sx={{
            backgroundColor: ((activeBtn === idx) ?
              `${theme.palette.primary.light}` : ''),
            "&:hover": {
              backgroundColor: `${theme.palette.primary.light}`,
            }
          }}>
            <AnchorLink offset='100' href={`#${item}`} style={{ all: 'inherit' }}>
              {/* <Link to={(item === 'Home' ? '/' : item)} style={{ all: 'inherit'}}> */}
              <ListItemButton
                onClick={() => { toggleActiveBtn(idx) }}
                sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </AnchorLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}></Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, gap: '8px' }}>
            {navItems.map((item, idx) => (
              <AnchorLink offset='100' href={`#${item}`} key={item}>
                <Button
                  onClick={() => toggleActiveBtn(idx)}
                  sx={{
                    color: ((activeBtn === idx) ?
                      `${theme.palette.secondary.main}`
                      : `${theme.palette.text.primary}`),
                    textTransform: "none",
                    borderBottomLeftRadius: '0',
                    WebkitBorderBottomRightRadius: '0',
                    borderBottom: ((activeBtn === idx) ? `1px solid ${theme.palette.secondary.main}` : 'none'),
                    "&:hover": {
                      color: `${theme.palette.secondary.main}`,
                      ':active': {
                        backgroundColor: `${theme.palette.primary.light}`
                      },
                    }
                  }}>
                  {item}
                </Button>
              </AnchorLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={isMobile}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Fragment>
  );
}

export default Navbar;