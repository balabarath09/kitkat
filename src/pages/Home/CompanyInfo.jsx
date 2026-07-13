import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Grid from "@mui/material/Grid";

const CompanyInfo = () => {
    const infoArray = [
        {
            icon: GroupsOutlinedIcon,
            Number: "10+",
            text: "Years of Experience",
            borderRight:true
        },
        {
            icon: BusinessCenterOutlinedIcon,
            Number: "500+",
            text: "Projects Completed",
            borderRight:true
        },
        {
            icon: GroupsOutlinedIcon,
            Number: "200+",
            text: "Happy Clients",
            borderRight:true
        },
        {
            icon: HeadsetMicOutlinedIcon,
            Number: "24/7",
            text: "Support & Maintenance",
            borderRight:false
        },
    ];

    return (
        <Grid container sx={{backgroundColor:"#042F60"}}>
            {infoArray.map((item, index) => {
                 const Icon = item.icon;
                 return (
                    <Grid size={{xs:6,sm:3}}>
                        <Box key={index} sx={{height:"100%",display:"flex",px:1,py:1,alignItems:"center",gap:2,color:"white",flexGrow:1,justifyContent:{xs:"start",lg:"center"},borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>
                            <Box>
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"1.5rem"}}}/>
                            </Box>

                            <Box>
                                <Typography sx={{fontSize:{xs:"0.8rem",md:"0.9rem",lg:"1rem"}}}>{item.Number}</Typography>
                                <Typography sx={{fontSize:{xs:"0.8rem",md:"0.9rem",lg:"1rem"}}}>{item.text}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                 );
             })}
        </Grid>
    );
};

export default CompanyInfo;