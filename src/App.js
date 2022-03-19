import './App.css';
import Download from './components/Download';
import Formularios from './components/Formularios';
import Header from './components/Header';
import Previsualizador from './components/Previsualizador';
import './aplicacion'
import { TextProvider } from './context/TextContext';
import FormularioDown from './components/FormularioDown';

function App() {
  return (
    <>
      <TextProvider>
        <div className="App">
          <Header />
          <div className='editor'>
            <Formularios />
            <Previsualizador />
          </div>
          <FormularioDown id="downloader" className="downloader"/>
          <Download />
        </div>
      </TextProvider>
    </>
  );
}

export default App;
