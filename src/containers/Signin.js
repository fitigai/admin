import React, { useState } from "react"
import MainContainer from "../styles/MainContainer"
import { TextInputField, Button } from "evergreen-ui"
import Axios from "axios"

function Signin() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8080/register", { username, email, password })
      console.log("User was successfully created.")
    } catch (e) {}
    console.log("There was an error.")
  }

  return (
    <MainContainer narrowContainer>
      <div className="row-center">
        <div className="col-lg-7 content-narrow">
          <h1>Welcome Folks !</h1>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        </div>
        <div className="col-lg-5 content-narrow">
          <form onSubmit={handleSubmit}>
            <TextInputField label="Username" placeholder="Pick a username" onChange={e => setUsername(e.target.value)} />
            <TextInputField label="Email" placeholder="you@example.com" onChange={e => setEmail(e.target.value)} />
            <TextInputField label="Password" placeholder="Create a password" onChange={e => setPassword(e.target.value)} />
            <Button marginRight={16} appearance="primary">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </MainContainer>
  )
}

export default Signin
