import './App.css';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import Slider from './Componentes/Slider';
import DataProvider from './Context/DataProvider';

function App() {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Slider/>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
