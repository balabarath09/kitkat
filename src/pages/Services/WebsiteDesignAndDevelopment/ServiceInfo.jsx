import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Grid from "@mui/material/Grid";

const ServiceInfo = () => {
    const infoArray = [
        {
            icon: GroupsOutlinedIcon,
            text: "Responsive Design All Devices",
        },
        {
            icon: BusinessCenterOutlinedIcon,
            text: "SEO Friendly Architecture",
        },
        {
            icon: GroupsOutlinedIcon,
            text: "Fast Loading Performance",
        },
        {
            icon: HeadsetMicOutlinedIcon,
            text: "Secure & Scalable Solutions",
        },
        {
            icon: HeadsetMicOutlinedIcon,
            text: "On-time Delivery Every Time",
        },
        {
            icon: HeadsetMicOutlinedIcon,
            text: "Ongoing Support & Maintenance",
        },
    ];

    return (
        <Grid container sx={{backgroundColor:"#042F60"}}>
            {infoArray.map((item, index) => {
                 const Icon = item.icon;
                 return (
                    <Grid size={{xs:6,md:2}}>
                        <Box key={index} sx={{height:"100%",display:"flex",px:1,py:1,alignItems:"center",gap:2,color:"white",flexGrow:1,justifyContent:{xs:"start",lg:"center"},borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>
                            <Box>
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"1.5rem"}}}/>
                            </Box>

                            <Box>
                                <Typography sx={{fontSize:{xs:"0.8rem",md:"0.9rem",lg:"1rem"}}}>{item.text}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                 );
             })}
        </Grid>
    );
};

export default ServiceInfo;