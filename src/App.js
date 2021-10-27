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
            <Route exact path="/dontaion">
              <Donation></Donation>
            </Route>
            <Route exact path="/events">
              <Events></Events>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>
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
