import Header from './components/Header/Header';
import Default from './components/Default/Default';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
<Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Default/>}> </Route>
      </Routes>
    </Router>
    );
}

export default App;
