import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../theme";
import{ IconButton } from "@mui/material";



export const Product=styled(Box)(({theme})=>({
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]:{
            position:'relative'
}
}));

export const ProductImage=styled('img')(({src,theme})=>({
        src:`url(${src})`,
        width:'100%',
        background:colors.dove_grey,
        padding:'10px',
        [theme.breakpoints.down('md')]:{
            width:'100%',
            padding:'24px',
        }
}));

export const ProductActionButton=styled(IconButton)(()=>({
background:colors.white,
margin:4,

}));
export const ProductFavButton=styled(ProductActionButton,{
    shouldForwardProp:(prop)=>prop!=='isfav'
})(({isfav,theme})=>({
color:isfav?colors.primary:colors.light,
[theme.breakpoints.up('md')]:{
    position:"absolute",
    right:0,
    top:0,
} 
    }));


    export const ProductAddToCart=styled(Button,{
        shouldForwardProp:(prop)=>prop !=='show'
    })(({show ,theme})=>({

        width:'120px',
        fontSize:'12px',
        [theme.breakpoints.up('md')]:{
            position:"absolute",
            bottom:'2%',
            width:'300px',
            padding:'10px 5px'
        },
        background:colors.secondary,
        opacity:0.9,
     

    }));
    
    export const ProductMetaWrapper=styled(Box)(({theme})=>({
        padding:4,
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    }));


    export const ProductActionsWrapper=styled(Box ,{
        shouldForwardProp:(prop)=>prop !=='show'
    })(({show ,theme})=>({
        [theme.breakpoints.up('md')]:{
            display: show ? 'visible':'none',
            position:'absolute',
            right:0,
            top:'20%',
        },
    }));
