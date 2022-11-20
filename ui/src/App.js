import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";

import Login from "./login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import Widgets from "./widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
