import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Routes } from './Routes';



function App() {
  return (
    <><Routes />
    <div className="App">
      <Navbar />
      <Home />
    </div></>
  );
}

export default App;
