import { Route, Routes } from 'react-router-dom'
import './App.css'
import Box from '@mui/material/Box';
import HomeIndex from './pages/Home/HomeIndex';
import Footer from './components/Footer';
import NavbarIndex from './components/Navbar/NavbarIndex';
import Index from './pages/Services/WebsiteDesignAndDevelopment/Index';
import AboutIndex from './pages/About/AboutIndex';
import Contact from './pages/Contact/Contact';
import WebAppIndex from './pages/Services/WebApplication/WebAppIndex';

function App() {

  return (
    <>
    <NavbarIndex />
    <Box sx={{width:"100%"}}>
      <Routes>
        <Route path="/" element={<HomeIndex/>}/>
        {/* service pages */}
        <Route path='/services/web-design' element={<Index/>}/>
        <Route path='/services/web-app' element={<WebAppIndex/>}/>

        <Route path='/aboutus' element={<AboutIndex/>}/>
        <Route path='/contactus' element={<Contact/>}/>
      </Routes>
    </Box>
    <Footer/>
    </>
  )
}

export default App
