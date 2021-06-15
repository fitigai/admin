import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { toggleAside } from "../actions/asideActions"
import Admin from "./Admin"
import Navbar from "../components/Navbar"
import { CSSTransition, TransitionGroup } from "react-transition-group"

class App extends Component {
  render() {
    return (
      <div className={`app--container with-sidebar ` + (this.props.isAsideSocialOpen || this.props.isAsideLangOpen ? `is-open` : ``) + (this.props.isAsideCartOpen ? `is-cartOpen` : ``)}>
        <BrowserRouter>
          <Navbar />
          <div className="site-cover" onClick={() => this.props.toggleAside("closeAll")}></div>

          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={450} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/" component={Admin} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </BrowserRouter>
      </div>
    )
  }
}

export default (App)
