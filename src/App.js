
import './App.css';
import Footer2 from './components/footer2/Footer2';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Cases from './pages/Cases';
import Home from './pages/Home';
import Service from './pages/Service';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cases' element={<Cases/>}/>
          <Route path='/contacts' element={<Footer/>}/>
        </Routes>

        <Footer2 />

      </Router>

      {/* <Header />                Option #2
          <Home />
          <Service />
          <About />
          <Cases />
          <Footer />
          <Footer2 /> */}

    </>
  );
}

export default App;


