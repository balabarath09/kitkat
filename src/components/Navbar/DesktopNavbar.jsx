import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CallIcon from "@mui/icons-material/Call";
import KitKatLogo from "../../assets/Images/KitKatLogo.png"
import React from 'react'
import { CommonButton } from '../../StyledComponents/CommonButton';
import { NavLink } from 'react-router-dom';
const DesktopNavbar = ({menuArray,location,desktopMenu,setDesktopMenu,handleDesktopMenu}) => {
  return (
    <>
        <ClickAwayListener onClickAway={() => setDesktopMenu(null)}>
            <Box sx={{display: { xs: "none", md: "flex" },justifyContent: "space-between",alignItems: "center",height: "10vh",px:{md:0.5,nd:2,lg:3},boxShadow: "0 2px 5px rgba(0,0,0,.2)",position: "sticky",top: 0,background: "#fff",zIndex: 1000,}}>
                <Box component="img" src={KitKatLogo} sx={{width: 200,height: 50, }}/>
                <Box sx={{display: "flex",gap: "10px",alignItems: "center", }}>
                    {menuArray.map((item, index) => {
                        const parentActive =item.subMenu && item.subMenu.some((sub) => sub.path === location.pathname);
                        return (
                            <Box key={index} sx={{position: "relative", }}>
                                {item.subMenu ? (
                                    <Typography onClick={() =>handleDesktopMenu(index) } sx={{cursor: "pointer",fontSize:{md:"0.9rem",nd:"1rem",lg:"1.1rem"},color: parentActive? "#1976d2": "black",fontWeight: parentActive? 700: 500,textDecoration: parentActive? "underline": "none", }}>
                                        {item.name}
                                    </Typography>
                                ) : (
                                    <Typography component={NavLink} to={item.path} onClick={() => setDesktopMenu(null)} sx={{textDecoration: "none",fontSize:{md:"0.9rem",nd:"1rem",lg:"1.1rem"},color: "black","&.active": {color: "#1976d2",fontWeight: 700,textDecoration:"underline",}, }}>
                                        {item.name}
                                    </Typography>
                                )}
                                {item.subMenu &&
                                    desktopMenu === index && (
                                        <Paper elevation={4} sx={{position: "absolute",top: "120%",left: 0,minWidth: 280,zIndex: 1000, }}>
                                            <List disablePadding>
                                                {item.subMenu.map((subItem,subIndex) => (
                                                        <ListItemButton key={subIndex} component={NavLink } to={subItem.path } onClick={() =>setDesktopMenu(null) } sx={{"&.active":{backgroundColor:"#1976d2",color:"white",}, }}>
                                                            <ListItemText primary={subItem.name}/>
                                                        </ListItemButton>
                                                    )
                                                )}
                                            </List>
                                        </Paper>
                                    )}
                            </Box>
                        );
                    })}
                </Box>
                <Box sx={{display: "flex",alignItems: "center",gap: "10px", }}>
                    <Box sx={{display: "flex",alignItems: "center",gap: "5px", }}>
                        <CallIcon sx={{fontSize:{md:"0.9rem",lg:"1rem"}}}/>
                        <Typography sx={{fontSize:{nd:"0.9rem",lg:"1rem"},display:{md:"none",nd:"block"}}}>+91 93638 39353</Typography>
                    </Box>
                    <CommonButton variant="contained" sx={{fontSize:{md:"0.5rem",nd:"0.7rem",lg:"0.8rem"}}}>
                        Get Free Quote
                    </CommonButton>
                </Box>
            </Box>
        </ClickAwayListener>
    </>
  )
}
export default DesktopNavbar