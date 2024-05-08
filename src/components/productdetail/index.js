import { Dialog, DialogContent, DialogTitle,Slide, IconButton,useMediaQuery, Typography, Button } from "@mui/material";
import {Box, styled} from "@mui/system";
import { colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/Products";
import IncDec from "../ui";
import FavoriteIcon from "@mui/icons-material/Favorite";
function SlideTransition(props){
    return <Slide direction="down"{...props}/>
}
const ProductDetailWrapper= styled(Box)(({theme})=>({
    display: "flex",
    padding:theme.spacing(4)

}));
const ProductDetailInfoWrapper=styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:'column',
    maxwidth:500,
    lineHeight:1.5,
}));
export default function ProductDetail({open,onClose,product}){

const theme=useTheme();
const matches=useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Dialog
        TransitionComponent={SlideTransition}
        variant="permanat"
        open={open}
        fullScreen
        >
            <DialogTitle sx={{
                background:colors.secondary
            }}>
                    <Box
                    display={'flex'}
                    alignItems='center'
                    justifyContent={'space-between'}>
                    Product title
                    <IconButton onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                    </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column':'row'}>
                        <Product sx={{mr:4}}>
                            <ProductImage src={product.images} />
                        </Product>
                        <ProductDetailInfoWrapper>
                            <Typography variant="subtitle1">SKU 123</Typography>
                            <Typography variant="subtitle1">Availability:5 in stock</Typography>
                            <Typography sx={{lineHeight:2}} variant ="h4">
                                {product.name}
                            </Typography>
                            <Typography variant='body'>
                                {product.description}
                                {product.description}
                                {product.description}
                            </Typography>
                            <Box
                            sx={{
                                mt:4
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between">

                            <IncDec/>
                            <Button  variant="contained">Add to cart</Button>
                            </Box>
                            <Box
                            display="flex"
                            alignItems="center"
                            sx={{mt:4,color:colors.light}}>
                                <FavoriteIcon sx={{mr:2}}/>
                                Add to wishlist
                            </Box>
                        </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )


}