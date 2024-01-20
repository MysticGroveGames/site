import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import NotFound from './components/common/NotFound';
import './App.css'

const routeComponentMapping: { [key: string]: React.FC } = {
  '/': HomePage,
  // '/newpage': NewPage,
  // Add more routes as needed
};


function App() {
  const currentRoute = (window as any).__ROUTE__;
  console.log({currentRoute})
  const CurrentComponent = routeComponentMapping[currentRoute] || NotFound;

  return (
    <div>
      <Header />
      <CurrentComponent />
      <Footer />
    </div>
  );
}
export default App;
