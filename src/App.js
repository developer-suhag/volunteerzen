import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/Pages/Admin/Admin";
import Blog from "./components/Pages/Blog/Blog";
import Donation from "./components/Pages/Donation/Donation";
import Events from "./components/Pages/EventsPage/EventsPage";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Register from "./components/Pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/dontaion">
              <Donation></Donation>
            </PrivateRoute>
            <PrivateRoute exact path="/events">
              <Events></Events>
            </PrivateRoute>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/register/:id">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
