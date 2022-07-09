import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer";
import Musik from "./Components/Musik/Musik";
import News from "./Components/News/News";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
  // debugger;
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />

      <div className="app_pages">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/music" element={<Musik />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
