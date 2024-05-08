import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import theme, { colors } from "../theme";

export const SearchBoxContainer=styled(Box)(({theme})=>({

position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
background:colors.primary,
display:'flex',
justifyContent: 'center',
alignItems: 'center',
zIndex: 99999,
opacity: 0.9,


}));

export const SearchField=styled(TextField)(()=>({

".MuiInputLabel-root":{
    color:colors.secondary
},

".MuiInput-root":{
   fontSize:'1rem',
   [theme.breakpoints.up('md')]:{
    fontSize:'2rem'
   },
   color:colors.secondary
},
".MuiInput-root::before":{
    borderBottom: `1px solid ${colors.secondary}`
},
padding:"0 0 0 40px",

}));
