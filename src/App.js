import './assets/reset.css';
import './assets/App.scss';
import Header from './components/organisms/Header'
import FirstView from './components/organisms/FirstView'
import Profile from './components/organisms/Profile'
import Carear from './components/organisms/Carear'
import Skill from './components/organisms/Skill'
import Learning from './components/organisms/Learning'
import Work from './components/organisms/Work'
import Contact from './components/organisms/Contact'
import Footer from './components/organisms/Footer'


function App() {
  return (
    <div className="App">
      <Header />
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
