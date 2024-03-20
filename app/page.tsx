import Image from "next/image";
import Slideshow from './components/Slideshow';
import Artifice from './components/Artifice';
import Trusted from './components/Trusted';
import Technology from './components/Technology';
import Explore from './components/Explore';
import Projects from './components/Projects';
import People from './components/People';
import Counter from './components/Counter';
import Blog from './components/Blog';
import Robot from './components/Robot';
import Footer from './components/Footer';
import Header from './components/Header';


export default function Home() {
  return (
    <main>
      <Header />
      <Slideshow />
      <Artifice />
      <Trusted />
      <Technology />
      <Explore />
      <Projects />
      <People />
      <Counter />
      <Blog />
      <Robot />
      <Footer />
    </main>
  );
}
