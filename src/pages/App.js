import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import GlobalStyle from "../styles/GlobalStyle"
import { routes } from "./routes"
import Homepage from "./Homepage"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")

  function Login(inputValues) {
    console.log(inputValues)
  }

  function Logout() {
    console.log("logout")
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {user.email != "" ? (
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
          ))}
        </Switch>
      ) : (
        <Homepage Login={Login} error={error} />
      )}
    </Router>
  )
}

export default App
