import React from "react"
import { Card, Cardheader, Pill, Pillcontainer } from "./Card.elements"
import { Avatar } from "evergreen-ui"

function Carduser() {
  return (
    <Card>
      <Cardheader>
        <h3>Olivia Smith</h3>
        <div>
          <span>Active - Coach</span>
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={40} />
        </div>
      </Cardheader>
      <table>
        <thead>
          <tr>
            <th>Account created at</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12.07.2021</td>
            <td>+41 78 212 28 02</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Last Logged in</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18.08.2021</td>
            <td>olivia.smith@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <Pillcontainer>
        <h5>City</h5>
        <Pill>Lausanne</Pill>
        <h5>Activity</h5>
        <Pill>Yoga</Pill>
        <Pill>Fitness</Pill>
      </Pillcontainer>
    </Card>
  )
}

export default Carduser
