import './assets/App.css';
import Header from './components/molecules/Header'
import FirstView from './components/molecules/FirstView'
import Profile from './components/molecules/Profile'
import Carear from './components/molecules/Carear'
import Skill from './components/molecules/Skill'
import Learning from './components/molecules/Learning'
import Work from './components/molecules/Work'
import Contact from './components/molecules/Contact'
import Footer from './components/molecules/Footer'


function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <FirstView />
      <Profile />
      <Carear />
      <Skill />
      <Learning />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
