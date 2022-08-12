import Navbar from "./components/navbar";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
