import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
