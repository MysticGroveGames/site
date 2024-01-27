import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import About from './pages/About';
import ScrollToTop from './components/Utilities/ScrollToTop';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
        <div className="flex-grow">
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage/>} />
              <Route path='/about' element={<About/>} />
            </Route>
            <Route path='/games'>
              <Route index element={<Games/>}/>
              <Route path=':id' element={<GameDetail/>} errorElement={<NotFound />}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
export default App;
