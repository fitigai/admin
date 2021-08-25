import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import HomePage from "./HomePage"
import Navbar from "../components/Navbar/Navbar"
import GlobalStyle from "../styles/GlobalStyle"

function App() {
  const [loggedIn, setLoggedin] = useState(false)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar setLoggedin={loggedIn} />
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        )}
      />
    </BrowserRouter>
  )
}

export default App
