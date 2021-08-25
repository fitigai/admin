import React, { useState } from "react"
import { Button } from "evergreen-ui"
import { MainHomePage, FormCenter, FormTextCenter } from "./Pages.elements"
import FormInputField from "../components/Form/FormInputField"
import Logo from "../components/Logo/Logo"

function HomePage() {
  async function handleSubmit(e) {
    e.preventDefault()
    console.log("User was successfully created.")
  }

  return (
    <MainHomePage imgUrl={process.env.PUBLIC_URL + "/homepage-background.jpg"}>
      <FormCenter onSubmit={handleSubmit}>
        <Logo />
        <h1>Bienvenue sur la plate-forme Fitigai Admin</h1>
        <FormTextCenter>Le futur de Fitigai se trouve ici. Faites un choix statistique en évaluant les tendances de vos utilisateurs et concevez de nouveau moyen de gestion. Créez une technologie durable afin que vos utilisateurs continuent de participer à la course de la performance.</FormTextCenter>
        <FormInputField />
        <FormInputField />
        <Button marginRight={16} appearance="primary">
          Sign up
        </Button>
      </FormCenter>
    </MainHomePage>
  )
}

export default HomePage
