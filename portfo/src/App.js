import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navigation  from './components/navigation';
import Footer from './components/footer';
import Home from './components/home';
import Error from './components/error'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
