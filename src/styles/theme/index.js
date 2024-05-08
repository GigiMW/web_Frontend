import {createTheme} from "@mui/material/styles";
import { lighten } from "polished";

export const colors={
    primary:"#5f2c3e",
    secondary:"#d1adcc",
    success:"#4CAF50",
    info:"#00a2FF",
    danger:"#FF5722",
    warning:"#FFC107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#DDDFE1",
    inverse:"#2F3D4A",
    shaft:"#333",

    ///grays

    dim_grey:"#696969",
    dove_grey:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_grey:"#rgb(230,230,230)",
    //solid colors
    black:"#000000",
    white:"#ffffff",

};
const theme=createTheme({
    palette:{
        primary:{
            main:colors.primary
        },
        secondary:{
            main:colors.secondary
        },
        success:{
            main:colors.success
        },
        info:{
            main:colors.info
        },
        danger:{
            main:colors.danger
        },
        warning:{
            main:colors.warning
        },
        dark:{
            main:colors.dark
        },
        light:{
            main:colors.light
        },
        muted:{
            main:colors.muted
        },
        border:{
            main:colors.border
        },
        inverse:{
            main:colors.inverse
        },
        shaft:{
            main:colors.shaft
        },
        ///grays
        dim_grey:{
            main:colors.dim_grey
        },
        dove_grey:{
            main:colors.dove_grey
        },
        body_bg:{
            main:colors.body_bg
        }
    },

components: {
    MuiButton:{
       defaultProps: {
        disableRipple:true,
        disableElevation:true
        
       },
    },
    MuiDrawer: { 
        styleOverrides :{
            paper :{
                width :250,
                background: colors.primary,
                color :colors.secondary,
                borderRadius:'0px 100px 0px 0px',
                borderRight :`1px solid ${colors.secondary}`
               
            }
        }
    },
    MuiDivider:{ 
        styleOverrides :{
            root :{
               borderColor :lighten(0.2,colors.primary),
               
            }
        }
    },
    MyShowButton:
    {
        styleOverride: {
            root :{
                color :colors.white
            },
            primary :
            {
                background :colors.primary,
                "&:hover" :{
                    background :lighten(0.05,colors.primary),
                }
               
            },
            secondary : {
                background :colors.secondary,
                "&:hover" :{
                    background :lighten(0.05,colors.secondary),
                }
            }
        }

    }
}

});
export default theme;

