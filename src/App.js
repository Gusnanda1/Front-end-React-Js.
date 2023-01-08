import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/home";
import Card1 from "./components/cards";
import Group from "./components/group-tour";
import Footer from "./components/footer";
import Detail from "./components/detail-tour";
import Booknow from "./components/booking";
import Profile from "./components/profile-history-trip";
import { Navigate, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Incoming from "./components/admin-incoming-transcation";
import Addtrip from "./components/addtrip";
import FormAddtrip from "./components/FormAddtrip";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
              <Card1 />
              <Group />
              <Footer />
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <div>
              <Detail />
              <Footer />
            </div>
          }
        />

        {/* private route User */}
        <Route
          element={
            localStorage?.getItem("role") != "User" ? (
              <Navigate to="/" />
            ) : (
              <Outlet />
            )
          }
        >
          <Route
            path="/booknow/:id"
            element={
              <div>
                <Booknow />
                <Footer />
              </div>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <div>
                <Profile />
                <Footer />
              </div>
            }
          />
        </Route>

        {/* private route Admin */}
        <Route
          element={
            localStorage?.getItem("role") != "Admin" ? (
              <Navigate to="/" />
            ) : (
              <Outlet />
            )
          }
        >
          <Route
            path="/incoming"
            element={
              <div>
                <Incoming />
                <Footer />
              </div>
            }
          />
          <Route
            path="/addtrip"
            element={
              <div>
                <Addtrip />
                <Footer />
              </div>
            }
          />
          <Route
            path="/FormAddtrip"
            element={
              <div>
                <FormAddtrip />
                <Footer />
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
