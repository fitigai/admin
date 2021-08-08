import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Signin from "./Signin"
import About from "./About"
import Terms from "./Terms"
import Login from "./Login"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function App(props) {
  const [loggedIn, setLoggedin] = useState()
  console.log(props.setLoggedin)
    return (
        <BrowserRouter>
          <Navbar setLoggedin={setLoggedin} />
          <Route
            render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/" component={Signin} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/terms" component={Terms} />
            </Switch>
            )}
        />
        <Footer />
        </BrowserRouter>
    )
}

export default App