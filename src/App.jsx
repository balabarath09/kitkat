import { Route, Routes } from 'react-router-dom'
import './App.css'
import Box from '@mui/material/Box';
import HomeIndex from './pages/Home/HomeIndex';
import Footer from './components/Footer';
import NavbarIndex from './components/Navbar/NavbarIndex';

function App() {

  return (
    <>
    <NavbarIndex />
    <Box sx={{width:"100%"}}>
      <Routes>
        <Route path="/" element={<HomeIndex/>}/>
      </Routes>
    </Box>
    {/* <Footer/> */}
    </>
  )
}

export default App
