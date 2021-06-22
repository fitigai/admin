import React from "react"
// import { Link } from "react-router-dom"
import Button from "../components/Button"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--logo">
        <span>My logo</span>
      </div>
      <div className="btn--container">
        <Button className="btn btn--accent" text="info@idmobile.ch" />
        <Button className="btn btn--accent" text="+41 (0)848 1234 00" />
      </div>
      <div className="footer--adress">
        <address>
          <span className="footer--adress-title">Adresse</span>
        </address>
      </div>
    </footer>
  )
}

export default Footer
