import './assets/reset.css';
import './assets/App.scss';
import Header from './components/organisms/Header'
import FirstView from './components/organisms/FirstView'
import Profile from './components/organisms/Profile'
import Carear from './components/molecules/Carear'
import Skill from './components/molecules/Skill'
import Learning from './components/molecules/Learning'
import Work from './components/molecules/Work'
import Contact from './components/molecules/Contact'
import Footer from './components/molecules/Footer'


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
