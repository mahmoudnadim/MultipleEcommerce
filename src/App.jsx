import './App.css'
import { Hero, VideoSection, Mainfeatures, AboutProject } from './Sections'

function App() {

  return (
    <>
        <nav className='text-center text-3xl'><a href="/">Multiple Ecommerce</a></nav>
        <Hero />
        <VideoSection />
        <AboutProject />
        <Mainfeatures />
        <footer><p class="footerText">All Rights Reserved {new Date().getFullYear().toString()} &copy;</p></footer>
    </>
  )
}

export default App
