import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerTitle ,BannerDescription, BannerImage, BannerShopButton} from "../../styles/banner";

export default function Banner() { 

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
return (
    <BannerContainer>
        <BannerImage src="/images/banner/banner1.jpg"/>
       <BannerContent>
        <Typography variant="h6" >Huge Collection</Typography>
        <BannerTitle variant="h2">
            New Collection
        </BannerTitle>

        <BannerDescription variant="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BannerDescription>
        <BannerShopButton color="primary">Shop Now </BannerShopButton>
       </BannerContent>
    </BannerContainer>
    
);

  }

