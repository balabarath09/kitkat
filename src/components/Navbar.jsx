// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { NavLink } from 'react-router-dom';
// import React, { useState } from 'react';
// import CallIcon from '@mui/icons-material/Call';
// import KitKatLogo from "../assets/Images/KitKatLogo.png"
// // import KitKatLogo from "../assets/Images/KitKatLogo.jpg"
// import { CommonButton } from '../StyledComponents/CommonButton';
// import CustomizedMenus from '../StyledComponents/Dropdown';
// import MenuIcon from "@mui/icons-material/Menu";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import CloseIcon from '@mui/icons-material/Close';
// import List from '@mui/material/List';
// import Collapse from '@mui/material/Collapse';
// import Popover from "@mui/material/Popover";
// import Paper from "@mui/material/Paper";

// const Navbar = () => {
//     // hamburger menu 
//     const [open,SetOpen] = useState(false)
//     const [openMenu,setMenuOpen] = useState(null)

//     // navbar
//     const [menuItem, setMenuItem] = useState(null);

//     const handleMenu = (index) => {
//          setMenuItem(menuItem === index ? null : index);
//     };

//     const menuArray = [
//         {
//             name:"Home",
//             path:"",
//             subMenu:null
//         },
//         {
//             name:"Services",
//             path:"",
//             subMenu:[
//                 {name:"All Services",path:""},
//                 {name:"Website Design & Development",path:""},
//                 {name:"Website Application Development",path:""},
//                 {name:"Customize Application Development",path:""},
//                 {name:"Domain & Web Hosting",path:""},
//                 {name:"Mobile Application Development",path:""},
//                 {name:"Bulk SMS",path:""},
//                 {name:"Digital Marketing",path:""},
//                 {name:"Data Analyst",path:""},
//                 {name:"SEO",path:""},
//                 {name:"Youtube & Insta Ads",path:""},

//             ]
//         },
//         {
//             name:"Training",
//             path:"",
//             subMenu:[
//                 {name:"All Training",path:""},
//                 {name:"UI/UX",path:""},
//                 {name:"Full Stack/MERN Stack",path:""},
//                 {name:"Mobile App",path:""},
//                 {name:"Python",path:""},
//                 {name:"PHP",path:""},
//                 {name:"Node",path:""},
//                 {name:"Java",path:""},
//                 {name:"React",path:""},
//                 {name:"Data Science",path:""},
//                 {name:"Artificial Intelligence",path:""},
//                 {name:"Devops",path:""},
//                 {name:"Digital Marketing",path:""},
//             ]
//         },
//         {
//             name:"Products",
//             path:"",
//             subMenu:[
//                 {name:"All Products",path:""},
//                 {name:"E-Commerce",path:""},
//                 {name:"CRM",path:""},
//                 {name:"ERP",path:""},
//                 {name:"Biometric Based HRM",path:""},
//                 {name:"School ERP",path:""},
//                 {name:"Gold Loan Management",path:""},
//                 {name:"Matrimonial Website",path:""},
//                 {name:"Medical Billing",path:""},
//                 {name:"Mini Banking",path:""},

//             ]
//         },
//         {
//             name:"Blog",
//             path:"blog",
//             subMenu:null
//         },
//         {
//             name:"About Us",
//             path:"aboutus",
//             subMenu:null
//         },
//         {
//             name:"Contact Us",
//             path:"contactus",
//             subMenu:null
//         },     
//     ]
//     return (
//         <>
//         <Box sx={{boxShadow:"0px 2px 5px",zIndex:1,display:{xs:"none",md:"flex"},justifyContent:"space-between",alignItems:"center",px:{md:0.5,nd:2,lg:3},py:2,height:"10vh",position:"sticky",top:0,backgroundColor:"white"}}>
//             <Box component={"img"} src={KitKatLogo}  sx={{height:"50px",width:"200px"}}/>
//             <Box sx={{display:"flex",gap:"10px",alignItems:"center",}}>
//                 {
//                     menuArray.map((item,index) => {
//                         return (
//                             <Box key={index}>
//                                     <Typography onClick={() => handleMenu(index)}  component={NavLink} to={`/${item.path}`} sx={{fontSize:{md:"0.9rem",nd:"1rem",lg:"1.1rem"},color:"black",textDecoration:"none","&.active":{color:"blue",fontWeight:600,textDecorationLine:"underline"}}}>{item.name}</Typography>
//                                         {item.subMenu && menuItem === index && (
//                                             <Paper
//                                                 elevation={3}
//                                                 sx={{
//                                                     position: "absolute",
//                                                     top: "100%",
//                                                     // left: 0,
//                                                     mt: 1,
//                                                     minWidth: 250,
//                                                     zIndex: 1000,
//                                                 }}
//                                             >
//                                                 <List>
//                                                     {item.subMenu.map((subItem, subIndex) => (
//                                                         <ListItemButton
//                                                             key={subIndex}
//                                                             component={NavLink}
//                                                             to={subItem.path}
//                                                         >
//                                                             <ListItemText primary={subItem.name} />
//                                                         </ListItemButton>
//                                                     ))}
//                                                 </List>
//                                             </Paper>
//                                         )}
//                             </Box>
//                         )
//                     })
//                 }
//             </Box>
//             <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
//                 <Box sx={{display:"flex",gap:"5px",alignItems:"center"}}>
//                     <CallIcon sx={{fontSize:{md:"0.9rem",lg:"1rem"}}}/>
//                     <Typography sx={{fontSize:{nd:"0.9rem",lg:"1rem"},display:{md:"none",nd:"block"}}}>+ 91 93638 39353</Typography>
//                 </Box>
//                 <CommonButton variant="contained" sx={{fontSize:{md:"0.5rem",nd:"0.7rem",lg:"0.8rem"}}}>Get Free Quote</CommonButton>

//             </Box>

//         </Box>
//         <Box sx={{display:{xs:"block",md:"none"}}}>
//             <IconButton onClick={() => SetOpen(true)}>
//                 <MenuIcon/>
//             </IconButton>
//             <Drawer 
//             anchor='left'
//             open={open}
//             onClose={() => SetOpen(false)}>
//                 <Box sx={{width:"70vw"}}>
//                     <Box sx={{display: "flex",justifyContent: "space-between",my:2,px:2}}>
//                         <Box component={'img'} src={KitKatLogo} sx={{height:"5vh"}}/>
//                         <IconButton onClick={() => SetOpen(false)}>
//                             <CloseIcon />
//                         </IconButton>
//                     </Box>
//                     <List sx={{borderTop:"1px solid black",px:1,}}>
//                         {
//                             menuArray.map((item,index) => {
//                                 return (
//                                     <Box key={index}>
//                                         <ListItem  sx={{borderBottom:"1px solid black",py:2,}}>
//                                             <ListItemButton onClick={() => setMenuOpen(openMenu === index ? null : index)} sx={{p:0,display:"flex",justifyContent:"space-between"}}>
//                                                 <Typography component={NavLink} to={`/${item.path}`} sx={{color:"black",textDecoration:"none","&.active":{color:"blue",fontWeight:600}}}>{item.name}</Typography>
//                                                 {
//                                                     item.subMenu && (openMenu === index ? <ExpandLess/> : <ExpandMore/>)
//                                                 }
//                                             </ListItemButton>
//                                         </ListItem>
//                                         {
//                                             item.subMenu && (
//                                                 <Collapse in={openMenu === index}>
//                                                     <List>
//                                                         <ListItemButton sx={{display:"flex",flexDirection:"column",pl:5}}>
//                                                             {
//                                                                 item.subMenu.map((subItem,subIndex) => {
//                                                                     return (
//                                                                         <Typography key={subIndex} component={NavLink} sx={{width:"100%",p:1,borderBottom:"1px solid black",textDecoration:"none",color:"black"}}>{subItem.name}</Typography>
//                                                                     )
//                                                                 })
//                                                             }
//                                                         </ListItemButton>
//                                                     </List>
//                                                 </Collapse>
//                                             )
//                                         }
//                                     </Box>
                                    
//                                 )
//                             })
//                         }
//                     </List>
//                 </Box>

//             </Drawer>
//         </Box>
//         </>
//     );
// }

// export default Navbar;


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CallIcon from "@mui/icons-material/Call";

import KitKatLogo from "../assets/Images/KitKatLogo.png";
import { CommonButton } from "../StyledComponents/CommonButton";

const Navbar = () => {

    const location = useLocation();

    // Mobile Drawer
    const [open, setOpen] = useState(false);

    // Mobile Accordion
    const [openMenu, setMenuOpen] = useState(null);

    // Desktop Dropdown
    const [desktopMenu, setDesktopMenu] = useState(null);

    const handleDesktopMenu = (index) => {
        setDesktopMenu(desktopMenu === index ? null : index);
    };

    const menuArray = [
        {
            name: "Home",
            path: "/",
            subMenu: null,
        },
        {
            name: "Services",
            subMenu: [
                { name: "All Services", path: "/services" },
                { name: "Website Design & Development", path: "/services/web-design" },
                { name: "Website Application Development", path: "/services/web-app" },
                { name: "Customize Application Development", path: "/services/custom-app" },
                { name: "Domain & Web Hosting", path: "/services/domain-hosting" },
                { name: "Mobile Application Development", path: "/services/mobile-app" },
                { name: "Bulk SMS", path: "/services/bulk-sms" },
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "Data Analyst", path: "/services/data-analyst" },
                { name: "SEO", path: "/services/seo" },
                { name: "Youtube & Insta Ads", path: "/services/youtube-instagram-ads" },
            ],
        },
        {
            name: "Training",
            subMenu: [
                { name: "All Training", path: "/training" },
                { name: "UI/UX", path: "/training/ui-ux" },
                { name: "Full Stack/MERN Stack", path: "/training/full-stack" },
                { name: "Mobile App", path: "/training/mobile-app" },
                { name: "Python", path: "/training/python" },
                { name: "PHP", path: "/training/php" },
                { name: "Node", path: "/training/node" },
                { name: "Java", path: "/training/java" },
                { name: "React", path: "/training/react" },
                { name: "Data Science", path: "/training/data-science" },
                { name: "Artificial Intelligence", path: "/training/artificial-intelligence" },
                { name: "Devops", path: "/training/devops" },
                { name: "Digital Marketing", path: "/training/digital-marketing" },
            ],
        },
        {
            name: "Products",
            subMenu: [
                { name: "All Products", path: "/products" },
                { name: "E-Commerce", path: "/products/ecommerce" },
                { name: "CRM", path: "/products/crm" },
                { name: "ERP", path: "/products/erp" },
                { name: "Biometric Based HRM", path: "/products/hrm" },
                { name: "School ERP", path: "/products/school-erp" },
                { name: "Gold Loan Management", path: "/products/gold-loan" },
                { name: "Matrimonial Website", path: "/products/matrimonial" },
                { name: "Medical Billing", path: "/products/medical-billing" },
                { name: "Mini Banking", path: "/products/mini-banking" },
            ],
        },
        {
            name: "Blog",
            path: "/blog",
            subMenu: null,
        },
        {
            name: "About Us",
            path: "/aboutus",
            subMenu: null,
        },
        {
            name: "Contact Us",
            path: "/contactus",
            subMenu: null,
        },
    ];

    return (
        <>
            <ClickAwayListener onClickAway={() => setDesktopMenu(null)}>
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "10vh",
                        px: 3,
                        boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                        position: "sticky",
                        top: 0,
                        background: "#fff",
                        zIndex: 1000,
                    }}
                >
                    <Box
                        component="img"
                        src={KitKatLogo}
                        sx={{
                            width: 200,
                            height: 50,
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                        }}
                    >
                        {menuArray.map((item, index) => {

                            const parentActive =
                                item.subMenu &&
                                item.subMenu.some(
                                    (sub) => sub.path === location.pathname
                                );

                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        position: "relative",
                                    }}
                                >
                                    {item.subMenu ? (
                                        <Typography
                                            onClick={() =>
                                                handleDesktopMenu(index)
                                            }
                                            sx={{
                                                cursor: "pointer",
                                                color: parentActive
                                                    ? "#1976d2"
                                                    : "black",
                                                fontWeight: parentActive
                                                    ? 700
                                                    : 500,
                                                textDecoration: parentActive
                                                    ? "underline"
                                                    : "none",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            component={NavLink}
                                            to={item.path}
                                            sx={{
                                                textDecoration: "none",
                                                color: "black",
                                                "&.active": {
                                                    color: "#1976d2",
                                                    fontWeight: 700,
                                                    textDecoration:
                                                        "underline",
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    )}

                                    {item.subMenu &&
                                        desktopMenu === index && (
                                            <Paper
                                                elevation={4}
                                                sx={{
                                                    position: "absolute",
                                                    top: "120%",
                                                    left: 0,
                                                    minWidth: 280,
                                                    zIndex: 1000,
                                                }}
                                            >
                                                <List disablePadding>
                                                    {item.subMenu.map(
                                                        (
                                                            subItem,
                                                            subIndex
                                                        ) => (
                                                            <ListItemButton
                                                                key={subIndex}
                                                                component={
                                                                    NavLink
                                                                }
                                                                to={
                                                                    subItem.path
                                                                }
                                                                onClick={() =>
                                                                    setDesktopMenu(
                                                                        null
                                                                    )
                                                                }
                                                                sx={{
                                                                    "&.active":
                                                                        {
                                                                            backgroundColor:
                                                                                "#1976d2",
                                                                            color:
                                                                                "white",
                                                                        },
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={
                                                                        subItem.name
                                                                    }
                                                                />
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
                                        <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <CallIcon />
                            <Typography>+91 93638 39353</Typography>
                        </Box>

                        <CommonButton variant="contained">
                            Get Free Quote
                        </CommonButton>
                    </Box>
                </Box>
            </ClickAwayListener>

            {/* ---------------- Mobile Navbar ---------------- */}

            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box sx={{ width: "75vw" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={KitKatLogo}
                                sx={{
                                    height: 50,
                                }}
                            />

                            <IconButton onClick={() => setOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <List>

                            {menuArray.map((item, index) => {

                                const parentActive =
                                    item.subMenu &&
                                    item.subMenu.some(
                                        (sub) =>
                                            sub.path === location.pathname
                                    );

                                return (
                                    <Box key={index}>

                                        <ListItem disablePadding>

                                            {item.subMenu ? (

                                                <ListItemButton
                                                    onClick={() =>
                                                        setMenuOpen(
                                                            openMenu === index
                                                                ? null
                                                                : index
                                                        )
                                                    }
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                        primaryTypographyProps={{
                                                            sx: {
                                                                color: parentActive
                                                                    ? "#1976d2"
                                                                    : "black",
                                                                fontWeight:
                                                                    parentActive
                                                                        ? 700
                                                                        : 500,
                                                            },
                                                        }}
                                                    />

                                                    {openMenu === index ? (
                                                        <ExpandLess />
                                                    ) : (
                                                        <ExpandMore />
                                                    )}
                                                </ListItemButton>

                                            ) : (

                                                <ListItemButton
                                                    component={NavLink}
                                                    to={item.path}
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    sx={{
                                                        "&.active": {
                                                            color: "#1976d2",
                                                            fontWeight: 700,
                                                        },
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                </ListItemButton>

                                            )}
                                        </ListItem>

                                        {item.subMenu && (

                                            <Collapse
                                                in={openMenu === index}
                                                timeout="auto"
                                                unmountOnExit
                                            >
                                                <List
                                                    component="div"
                                                    disablePadding
                                                >
                                                    {item.subMenu.map(
                                                        (
                                                            subItem,
                                                            subIndex
                                                        ) => (
                                                            <ListItemButton
                                                                key={subIndex}
                                                                component={
                                                                    NavLink
                                                                }
                                                                to={
                                                                    subItem.path
                                                                }
                                                                onClick={() => {
                                                                    setOpen(
                                                                        false
                                                                    );
                                                                    setMenuOpen(
                                                                        null
                                                                    );
                                                                }}
                                                                sx={{
                                                                    pl: 5,
                                                                    "&.active":
                                                                        {
                                                                            backgroundColor:
                                                                                "#1976d2",
                                                                            color:
                                                                                "white",
                                                                        },
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={
                                                                        subItem.name
                                                                    }
                                                                />
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
    );
};

export default Navbar;