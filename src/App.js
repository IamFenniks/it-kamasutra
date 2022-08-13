import "./App.css";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Musik from "./Components/Musik/Musik";
import News from "./Components/News/News";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import MyProfileContainer from "./Components/Profile/MyProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";

const App = (props) => {
  // debugger;
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Sidebar />

      <div className="app_pages">
        <Routes>
          <Route path="/myprofile" element={<MyProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/music" element={<Musik />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
