import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
     MyList,
     ActionIconsContainerDesktop,
     ActionIconsContainerMobile  } 
     from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart' ;
import PersonIcon from '@mui/icons-material/Person' ;
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";


function goToProfile() {
    
    window.location.href = "Profile";
  }
export default function Actions({matches}){

    const{cart,setShowCart}=useUIContext();

    
    const Component = matches
    ?ActionIconsContainerMobile 
    :ActionIconsContainerDesktop;
    return (
        <Component>
 <MyList type ="row">
            <ListItemButton
            sx={{
                justifyContent: 'center'
            }}
            >
                <ListItemIcon
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    colors: matches && colors.secondary,
                }}
                >
                       <Badge badgeContent={cart && cart.length} color="secondary">
                        <ShoppingCartIcon onClick={()=>setShowCart(true)}/>
                        </Badge> 


                </ListItemIcon>
            </ListItemButton>
            <Divider orientation ="vertical" flexItem/>
            
  
            <ListItemButton
              sx={{
                justifyContent: 'center'
            }}>
                <ListItemIcon
                 sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    colors: matches && colors.secondary,
                }}>
                    <FavoriteIcon/>
                </ListItemIcon>
                <Divider orientation ="vertical" flexItem />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center'
            }}>
                <ListItemIcon
                 sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    colors: matches && colors.secondary,
                }}>
                    <PersonIcon onClick={()=>goToProfile()}/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation ="vertical" flexItem />
           
            </MyList>
        </Component>
       
    );
    
}