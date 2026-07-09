// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";

// export const CommonButton = styled(Button)({
//     backgroundColor:"#0749C4",
//     color:"white",
//     textTransform:"none"
// } )

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CommonButton = styled(Button)(({ variant }) => ({
  textTransform: "none",

  ...(variant === "contained" && {
    backgroundColor: "#0749C4",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#063a9d",
    },
  }),

  ...(variant === "outlined" && {
    color: "#0749C4",
    border: "1px solid #0749C4",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgba(7,73,196,0.08)",
      border: "1px solid #0749C4",
    },
  }),
}));