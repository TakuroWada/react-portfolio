import './assets/App.css';
import Header from './components/molecules/Header'
import FirstView from './components/molecules/FirstView'
function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <FirstView />
    </div>
  );
}

export default App;
