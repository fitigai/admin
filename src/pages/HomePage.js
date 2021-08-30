import React, { useState } from "react"
import { MainHomePage, FormFloating, FormTextCenter } from "./Pages.elements"
import FormInputField from "../components/Form/FormInputField"
import Button from "../components/Button/Button"
import Logo from "../components/Logo/Logo"
import { Link } from "react-router-dom"

function Homepage() {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    password: ""
  })
  function handleSubmit(e) {
    e.preventDefault()
    console.log("User was successfully created.")
  }

  return (
    <MainHomePage imgUrl={process.env.PUBLIC_URL + "/homepage-background.jpg"}>
      <FormFloating onSubmit={handleSubmit}>
        <Logo />
        <h1>Bienvenue sur la plate-forme Fitigai Admin</h1>
        <FormTextCenter>Le futur de Fitigai se trouve ici. Faites un choix statistique en évaluant les tendances de vos utilisateurs et concevez de nouveau moyen de gestion. Créez une technologie durable afin que vos utilisateurs continuent de participer à la course de la performance.</FormTextCenter>
        <FormInputField fieldInputTitle="Pick your username or email" formInputText={inputValues.firstname} />
        <FormInputField fieldInputTitle="Pick your password" formInputText={inputValues.password} />
        <Link to="/dashboard">dashboard</Link>
        <Button apparance="primary" to="/dashboard">
          Sign up
        </Button>
      </FormFloating>
    </MainHomePage>
  )
}

export default Homepage
