import Header from './components/Header/Header';
import Default from './components/Default/Default';
import Compiling from './components/Compiling/Compiling';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePipelinePage from './components/CreatePipelinePage/CreatePipelinePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5' // Replace with your desired background color
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<CreatePipelinePage/>}> </Route>
        <Route path="/create_pipeline" element = {<CreatePipelinePage/>}>P
        </Route>
        <Route path="/compiling" element = {<Compiling/>}> </Route>
      </Routes>
      </Router>
    </ThemeProvider>
    );
}

export default App;
