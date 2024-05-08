import { ThemeProvider } from '@mui/system';
import { Box,Typography, Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
import Cart from './components/cart'; 
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';
import UserProfile from './PAGES/UserProfile';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import AccountSettings from './components/UserProfile/AccountSettings';
import ChangePassword from './components/UserProfile/ChangePassword';
import UserAddress from './components/UserProfile/UserAddress';
import LegalNotice from './components/UserProfile/LegalNotice';
// import AppRoutes from './Routes';

import SalesChart from './components/dashboard/SalesChart';

function App() {

 


  useEffect(()=>{
    document.title="React Material UI -Home";
  },[]);

  return (
    <ThemeProvider theme={theme}>
    <Container
      maxWidth="xl"
      sx={{
        background:'#ffff',
      }}
    >
     

     <BrowserRouter>
      <Routes>
    
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Profile" element={<UserProfile/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<Signup/>} />
      <Route path="/Forgot" element={<ForgotPassword/>} />
      <Route path="/AccSettings" element={<AccountSettings/>} />
      <Route path="/ChangePassword" element={<ChangePassword/>} />
      <Route path="/Address" element={<UserAddress/>} />
      <Route path="/Legal" element={<LegalNotice/>} />
      <Route path="/DashBoard" element={<SalesChart/>} />


        
      </Routes>
    </BrowserRouter>



      <UIProvider>
      <Appbar/>
        <Banner/>
        <Promotions/>
        <Box display='flex' justifyContent={"center"} sx={{p:4}}>
          <Typography variant="h4" >Catalog</Typography>
        </Box>
        <Products/>
        <Footer/>
        <AppDrawer/>
        <Cart/>
        
        <SearchBox/>
      </UIProvider>
       
   
     </Container>
     </ThemeProvider>
  );
}

export default App;
