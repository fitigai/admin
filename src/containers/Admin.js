import React from 'react'
import Container from "../components/Container"
import Aside from "./Aside"

export const Admin = (props) => {
  return(
      <Container wide={false} transition={true}>
        <Aside></Aside>
        <section>Blabla</section>
      </Container>
    
  )
}

export default Admin