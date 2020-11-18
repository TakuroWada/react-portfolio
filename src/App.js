import './assets/App.css';
import Header from './components/molecules/Header'
import FirstView from './components/molecules/FirstView'
import Profile from './components/molecules/Profile'
import Carear from './components/molecules/Carear'
import Skill from './components/molecules/Skill'
import Learning from './components/molecules/Learning'


function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <FirstView />
      <Profile />
      <Carear />
      <Skill />
      <Learning />
    </div>
  );
}

export default App;
