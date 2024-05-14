import './App.css';
import Asthetics from './components/Asthetics';
import Awards from './components/Awards';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import Projects from './components/Projects';
import Services from './components/Services';
import Whoarewe from './components/Whoarewe';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Hero />
        <Whoarewe />
        <Awards />
        <Services />
        <Asthetics />
        <Projects />
        <Numbers />
      </Layout>
    </div>
  );
}

export default App;
