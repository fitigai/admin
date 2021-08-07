import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Fitigai`
    window.scrollTo(0, 0)
  }, [props])
  return (
    <Container wide={props.wide}>
      {props.children}
    </Container>
  )
}

export default Page