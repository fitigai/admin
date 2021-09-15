import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Homepage from './HomePage';
import Navbar from "../components/Navbar/Navbar"
import GlobalStyle from "../styles/GlobalStyle"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="homepage" component={Homepage} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
