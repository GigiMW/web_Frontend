import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer,AppbarHeader,MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Dropdown } from "bootstrap";
import { Link } from 'react-router-dom'
import { BannerShopButton } from "../../styles/banner";
import { useHistory } from 'react-router-dom';

function goToAbout() {
    
    window.location.href = "about";
  }
  function goToContact() {
   
    window.location.href = "contact";
  }
  function goToHome() {
   
    window.location.href = "/";
  }

  function goToDashBoard() {
   
    window.location.href = "/DashBoard";
  }
  function goToLoginSignUp() {
   
    window.location.href = "/Login";
  }

export default function AppbarDesktop({matches}){
    const {setShowSearchBox}=useUIContext();
    //const {setopenAbout}=useUIContext();
    return(
        <AppbarContainer>
        <AppbarHeader>Skincare</AppbarHeader>
        <MyList type ="row"> 
            {/* <ListItemText primary="Home"/>
            <ListItemText primary="Catergories"/>
            <ListItemText primary="Products"/>
            <ListItemText primary="About Us"/> */}
            <ListItemButton onClick={()=>goToHome()}>
                <ListItemText>
                    
                Home
                </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={()=>goToLoginSignUp()}>
                <ListItemText>
                    
              Login/SignUp
                </ListItemText>
            </ListItemButton>
           
            <ListItemButton onClick={()=>goToDashBoard()}>
                <ListItemText>
                    
                DashBoard
                </ListItemText>
            </ListItemButton>
            <ListItemButton  onClick={()=>goToContact()}>
                <ListItemText>
                    
               Contact Us
                </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={()=>goToAbout()} >
                <ListItemText>
                    
                About us
                </ListItemText>
            </ListItemButton>
            {/* <button onClick="goToAbout()">About us</button>
            */}
            {/* <ListItemIcon onClick={()=>setopenAbout(true)}>
                    
                </ListItemIcon> */}



            <ListItemButton>
                
                <ListItemIcon>
                    <SearchIcon onClick={()=>setShowSearchBox(true)}/>
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        <Actions matches={matches}/>
        
    </AppbarContainer>

      );
    
 }

