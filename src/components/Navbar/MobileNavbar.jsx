import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KitKatLogo from "../../assets/Images/KitKatLogo.png"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from 'react'
import { NavLink } from 'react-router-dom';

const MobileNavbar = ({menuArray,location,open,setOpen,openMenu,setMenuOpen}) => {
  return (
    <>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: "75vw" }}>
                    <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",p: 2,}}>
                        <Box component="img" src={KitKatLogo} sx={{height: 50, }}/>
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {menuArray.map((item, index) => {
                            const parentActive =item.subMenu &&item.subMenu.some((sub) =>sub.path === location.pathname);
                            return (
                                <Box key={index}>
                                    <ListItem disablePadding>
                                        {item.subMenu ? (
                                            <ListItemButton onClick={() =>setMenuOpen(openMenu === index? null: index) }>
                                                <ListItemText primary={item.name} primaryTypographyProps={{sx: {color: parentActive? "#1976d2": "black",fontWeight:parentActive? 700: 500,}, }}/>
                                                {openMenu === index ? (<ExpandLess />) : (<ExpandMore />)}
                                            </ListItemButton>
                                        ) : (
                                            <ListItemButton component={NavLink} to={item.path} onClick={() =>setOpen(false) } sx={{"&.active": {color: "#1976d2",fontWeight: 700,}, }}>
                                                <ListItemText primary={item.name}/>
                                            </ListItemButton>
                                        )}
                                    </ListItem>
                                    {item.subMenu && (
                                        <Collapse in={openMenu === index} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {item.subMenu.map((subItem,subIndex) => (
                                                        <ListItemButton key={subIndex} component={NavLink } to={subItem.path } onClick={() => {setOpen(false) }} sx={{pl: 5,"&.active":{backgroundColor:"#1976d2",color:"white",}, }}>
                                                            <ListItemText primary={subItem.name }/>
                                                        </ListItemButton>
                                                    )
                                                )}
                                            </List>
                                        </Collapse>
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </Box> 
    </>
  )
}
export default MobileNavbar