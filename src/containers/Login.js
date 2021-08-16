import React, { useState } from "react"
import MainContainer from "../styles/MainContainer"
import { TextInput, Button } from "evergreen-ui"

function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      console.log("I'm in!")
    } catch (e) {
      console.log("There was a problem.")
    }
  }

  return (
    <MainContainer narrowContainer>
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
    </MainContainer>
  )
}

export default Login
