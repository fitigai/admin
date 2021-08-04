import React from "react"
import Container from "../components/Container"
import {TextInputField, Button} from 'evergreen-ui'

function HomeGuest() {
  return (
    <Container wide={true} >
        <div className="row-center">
          <div className="col-lg-7 content-narrow">
            <h1>Welcome Folks !</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          </div>
          <div className="col-lg-5 content-narrow">
            <TextInputField
              label="Username"
              placeholder="Pick a username"
            />
            <TextInputField
              label="Email"
              placeholder="you@example.com"
          />
          <TextInputField
              label="Password"
              placeholder="Create a password"
          />
          <Button marginRight={16} appearance="primary">
            Sign up
          </Button>
          </div>
        </div>
    </Container>
  )
}

export default HomeGuest