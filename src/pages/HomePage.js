import React, { useState } from "react"
import { TextInputField, Button } from "evergreen-ui"
import { MainHomePage, FormCenter } from "./Pages.elements"
import Logo from "../components/Logo/Logo"

function HomePage() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("User was successfully created.")
  }

  return (
    <MainHomePage imgUrl={process.env.PUBLIC_URL + "/homepage-background.jpg"}>
      <FormCenter onSubmit={handleSubmit}>
        <Logo />
        <h1>Bienvenue sur la plate-forme Fitigai Admin</h1>
        <p>Le futur de Fitigai se trouve ici. Faites un choix statistique en évaluant les tendances de vos utilisateurs et concevez de nouveau moyen de gestion. Créez une technologie durable afin que vos utilisateurs continuent de participer à la course de la performance.</p>
        <TextInputField label="Username" placeholder="Pick your username or email" onChange={e => setUsername(e.target.value)} />
        <TextInputField label="Password" placeholder="Pick your password" onChange={e => setPassword(e.target.value)} />
        <Button marginRight={16} appearance="primary">
          Sign up
        </Button>
      </FormCenter>
    </MainHomePage>
  )
}

export default HomePage
