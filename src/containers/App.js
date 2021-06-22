import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Admin from "./Admin"
import Navbar from "../components/Navbar"

class App extends Component {
  render() {
    return (
      <div className={`app--container with-sidebar ` + (this.props.isAsideSocialOpen || this.props.isAsideLangOpen ? `is-open` : ``) + (this.props.isAsideCartOpen ? `is-cartOpen` : ``)}>
        <BrowserRouter>
          <Navbar />
          <div className="site-cover" onClick={() => this.props.toggleAside("closeAll")}></div>

          <Route
            render={({ location }) => (
                  <Switch location={location}>
                    <Route exact path="/" component={Admin} />
                  </Switch>
            )}
          />
        </BrowserRouter>
      </div>
    )
  }
}

export default (App)
