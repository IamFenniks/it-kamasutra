import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";
import Musik from "./Components/Musik/Musik";
import News from "./Components/News/News";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />

      <div className="app_pages">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/music" element={<Musik />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
