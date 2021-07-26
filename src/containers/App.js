import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Admin from "./Admin"
import Navbar from "../components/Navbar"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar />
          <Route
            render={({ location }) => (
                  <Switch location={location}>
                    <Route exact path="/" component={Admin} />
                  </Switch>
            )}
          />
        </BrowserRouter>
    )
  }
}

export default (App)
