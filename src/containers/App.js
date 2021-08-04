import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Admin from "./Admin"
import HomeGuest from "./HomeGuest"
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
                <Route exact path="/homeguest" component={HomeGuest} />
                <Route path="/" component={Admin} />
            </Switch>
            )}
        />
        <Footer />
        </BrowserRouter>
    )
  }
}

export default (App)
