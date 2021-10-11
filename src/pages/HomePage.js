import React, { useState } from "react"
import { MainHomePage, FormFloating, FormTextCenter } from "./Pages.elements"
import FormInputField from "../components/Form/Input/FormInputField"
import FormButton from "../components/Form/FormButton/FormButton"
import Logo from "../components/Logo/Logo"

function Homepage({ Login, error }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    Login(inputValues)
  }

  return (
    <MainHomePage imgUrl={process.env.PUBLIC_URL + "/homepage-background.jpg"}>
      <FormFloating onSubmit={handleSubmit}>
        <Logo />
        <h1>Bienvenue sur la plate-forme Fitigai Admin</h1>
        <FormTextCenter>Le futur de Fitigai se trouve ici. Faites un choix statistique en évaluant les tendances de vos utilisateurs et concevez de nouveau moyen de gestion. Créez une technologie durable afin que vos utilisateurs continuent de participer à la course de la performance.</FormTextCenter>
        <FormInputField fieldInputTitle="Pick your username or email" formInputText={inputValues.name} />
        <FormInputField fieldInputTitle="Pick your password" formInputText={inputValues.password} />
        <FormButton apparance="primary" value="Se connecter" />
      </FormFloating>
    </MainHomePage>
  )
}

export default Homepage
