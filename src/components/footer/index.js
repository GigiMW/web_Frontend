import { Box,Grid,Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { colors } from "../../styles/theme";

export default function Footer (){
    return(
       <Box
       
       sx= {{background: colors.shaft,
        color:colors.white,
        p: {xs:4 , md:10},
        pt : 12,
        pb:12,
        fontSize: {xs:'12px' , md:'14px'}
       }}
       
       
       >
        <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} lg={4}>
<FooterTitle variant="body1">About Us</FooterTitle>
<Typography variant="caption2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Typography>
            </Grid>
        </Grid>
       </Box>
    )
}