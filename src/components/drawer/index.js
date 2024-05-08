
import { Button, Divider, Drawer, List, ListItemButton, ListItemText  } from "@mui/material"
import {styled} from "@mui/system"
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { colors } from "../../styles/theme";
const MiddleDivider = styled ((props)=>{
<Divider variant="middle" {...props}/>
})``;
export default function AppDrawer(){

const{drawerOpen, setDrawerOpen}=useUIContext();


return (
    <>
       {drawerOpen&&(
        <DrawerCloseButton onClick={()=>setDrawerOpen(false)}>
                <CloseIcon
                sx={{
                    fontSize:'2.5rem',
                    color:lighten(0.09,colors.secondary),
                }}
                />
        </DrawerCloseButton>
    )}
    <Drawer open={drawerOpen}>
     
        <List>
            <ListItemButton>
                <ListItemText>
                    Home
                </ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <Divider variant="middle"/>
            <ListItemButton>
                <ListItemText>
                    Categories
                </ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>
                    products
                </ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>
                    
                About us
                </ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>
                Contact us
                </ListItemText>
            </ListItemButton>
            <MiddleDivider />
        </List>
    </Drawer>
    
    </>
   
)
}