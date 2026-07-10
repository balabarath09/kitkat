import { Route, Routes } from 'react-router-dom'
import './App.css'
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import HomeIndex from './pages/Home/HomeIndex';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbar />
    <Box sx={{width:"100%"}}>
      <Routes>
        <Route path="/" element={<HomeIndex/>}/>
      </Routes>
    </Box>
    <Footer/>
    </>
  )
}

export default App
