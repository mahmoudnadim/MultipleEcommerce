import './App.css'
import { Hero, VideoSection, Mainfeatures, AboutProject } from './Sections'
import Nav from "./components/Nav/Nav"
import { useTranslation } from 'react-i18next';

function App() {
  const {t,i18n} = useTranslation()
  document.body.className = i18n.language === 'ar' ? 'ar': 'lang';

  return (
    <>
        <Nav />
        <Hero />
        <VideoSection />
        <AboutProject />
        <Mainfeatures />
        <footer><p class="footerText">All Rights Reserved {new Date().getFullYear().toString()} &copy;</p></footer>
    </>
  )
}

export default App
