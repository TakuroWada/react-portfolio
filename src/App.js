import './assets/App.css';
import Header from './components/molecules/Header'
import FirstView from './components/molecules/FirstView'
import Profile from './components/molecules/Profile'

function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <FirstView />
      <Profile />
    </div>
  );
}

export default App;
