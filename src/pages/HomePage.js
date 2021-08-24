import React, { useState } from "react"
import { TextInputField, Button } from "evergreen-ui"
import Axios from "axios"
import { Container, Row, Col } from "../styles/Grid"
import { s, DEVICE } from "../styles/GlobalStyleVariable"

function HomePage() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("User was successfully created.")
  }

  return (
    <Container narrowContainer>
      <Row FlexItems="top">
        {/* <Col size="4" DEVICE="mobileL"> */}
        <Col size="4" collapse="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a massa a tortor ullamcorper varius. Quisque tempus commodo turpis, nec tempus erat accumsan in. Proin eu turpis in est iaculis vulputate ac in lorem. Vestibulum vehicula, libero ac consectetur interdum, metus sem elementum nunc, eget porttitor diam mi vel ex. Cras eget nibh aliquam nisl faucibus elementum vel ut libero. Suspendisse at metus sed est egestas lobortis ac non lorem. Curabitur libero arcu, pretium nec augue at, pellentesque ultrices sapien. In elementum dapibus orci, eu faucibus justo ultrices quis. Donec posuere lacinia magna vitae consectetur. Praesent finibus libero nec convallis sollicitudin. Vivamus augue libero, tincidunt ac tincidunt non, efficitur sed velit. Praesent rutrum mauris ac semper congue. Suspendisse suscipit fringilla purus non congue.
        </Col>
        <Col size="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a massa a tortor ullamcorper varius. Quisque tempus commodo turpis, nec tempus erat accumsan in. Proin eu turpis in est iaculis vulputate ac in lorem. Vestibulum vehicula, libero ac consectetur interdum, metus sem elementum nunc, eget porttitor diam mi vel ex. Cras eget nibh aliquam nisl faucibus elementum vel ut libero. Suspendisse at metus sed est egestas lobortis ac non lorem. Curabitur libero arcu, pretium nec augue at, pellentesque ultrices sapien. In elementum dapibus orci, eu faucibus justo ultrices quis. Donec posuere lacinia magna vitae consectetur. Praesent finibus libero nec convallis sollicitudin. Vivamus augue libero, tincidunt ac tincidunt non, efficitur sed velit. Praesent rutrum mauris ac semper congue. Suspendisse suscipit fringilla purus non congue.</Col>
        <Col size="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a massa a tortor ullamcorper varius. Quisque tempus commodo turpis, nec tempus erat accumsan in. Proin eu turpis in est iaculis vulputate ac in lorem. Vestibulum vehicula, libero ac consectetur interdum, metus sem elementum nunc, eget porttitor diam mi vel ex. Cras eget nibh aliquam nisl faucibus elementum vel ut libero. Suspendisse at metus sed est egestas lobortis ac non lorem. Curabitur libero arcu, pretium nec augue at, pellentesque ultrices sapien. In elementum dapibus orci, eu faucibus justo ultrices quis. Donec posuere lacinia magna vitae consectetur. Praesent finibus libero nec convallis sollicitudin. Vivamus augue libero, tincidunt ac tincidunt non, efficitur sed velit. Praesent rutrum mauris ac semper congue. Suspendisse suscipit fringilla purus non congue.</Col>
      </Row>
      {/* <div className="row-center">
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
      </div> */}
    </Container>
  )
}

export default HomePage
