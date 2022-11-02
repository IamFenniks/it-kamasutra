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
import React from "react";
import { connect } from 'react-redux';
import { inisializeApp } from "./redux/redusers/appReduser";
import { compose } from "redux";
import Preloader from "./Components/Common/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.inisializeApp();
  }
  
  render () {
    if(!this.props.inisialized){
      return <Preloader />
    }

    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Sidebar />
  
        <div className="app_pages">

          {/*
          *  Сейчас используется другое вместро Route и т.д.
          *  https://reactrouter.com/en/v6.3.0/api#useparams
          */}

          <Routes>   {/* Читает путь в адресн. стр-ке и выдает соответв. компоненту*/}
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
   }
  
};

let mapStateToProps = (state) => ({
  inisialized: state.app.inisialized
})

export default compose(
  connect(mapStateToProps, { inisializeApp })
  // Возможно понадобится хук useRouter()
) (App);

