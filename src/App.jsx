import { Box } from '@chakra-ui/react';
import './App.css';
// import LandingPage from './components/Body/LandingPage';
import Navbar from './components/Header/Navbar';
import Navigation from './components/Navigate/Navigation';

function App() {
  return (
    <div>
      <Box  >
        <Navbar />
      </Box>
      <Box >
        {/* <LandingPage /> */}
        <Navigation />
      </Box>

    </div>
  );
}

export default App;


// https://online.kfc.co.in/static/media/KFC_Loader_Gif.66979359.gif


//   "proxy": "http://localhost:5000",