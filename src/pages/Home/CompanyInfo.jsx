import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

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
        <Box sx={{display:"flex",justifyContent:"space-evenly",backgroundColor:"#042F60",py:2}}>
            {infoArray.map((item, index) => {
                const Icon = item.icon;

                return (
                    <Box key={index} sx={{display:"flex",alignItems:"center",gap:2,color:"white",flexGrow:1,justifyContent:"center",borderRight:item.borderRight ? "2px solid white" : ""}}>
                        <Box>
                            <Icon />
                        </Box>

                        <Box>
                            <Typography>{item.Number}</Typography>
                            <Typography>{item.text}</Typography>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

export default CompanyInfo;