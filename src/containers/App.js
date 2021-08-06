import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Admin from "./Admin"
import HomeGuest from "./HomeGuest"
import About from "./About"
import Terms from "./Terms"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar />
          <Route
            render={({ location }) => (
            <Switch location={location}>
                <Route exact path="/" component={HomeGuest} />
              <Route path="/admin" component={Admin} />
              <Route path="/about" component={About} />
              <Route path="/terms" component={Terms} />
            </Switch>
            )}
        />
        <Footer />
        </BrowserRouter>
    )
  }
}

export default (App)
