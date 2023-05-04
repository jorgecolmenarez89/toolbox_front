import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import FilesPage from './Views/FilesPage';

function App() {
  return (
    <div className="App">
      <Header title={' Listado de Archivos'} />
      <FilesPage />
    </div>
  );
}

export default App;
