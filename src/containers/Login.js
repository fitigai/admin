import React, { useState } from "react"
import Container from "../components/Container"
import { TextInput, Button } from "evergreen-ui"
import Axios from "axios"

function Login(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:8080/login", { username, password })
      if (response.data) {
        console.log(response.data)
        console.log(props.setLoggedin)
        props.setLoggedin(true)
      } else {
        console.log("Incorrect username / password.")
      }
    } catch (e) {
      console.log("There was a problem.")
    }
  }

  return (
    <Container wide="false">
      <div className="block-center">
        <form onSubmit={handleSubmit}>
          <h2>Enter your username and password to access to your account</h2>
          <TextInput name="username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <TextInput name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <Button marginRight={16} appearance="primary">
            Send
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Login
