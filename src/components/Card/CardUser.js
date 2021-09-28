import React from "react"
import { ContainerTable, TableCell, CardFooter, Pill } from "./Card.elements"
import { Avatar } from "evergreen-ui"

function CardUser() {
  return (
    <article className="card-user">
      <header>
        <h3>Olivia Smith</h3>
        <span>Active - Coach</span>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={40} />
      </header>
      <ContainerTable>
        <TableCell>
          <h3>Olivia Smith</h3>
        </TableCell>
        <TableCell>
          <span>Active - Coach</span>
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={40} />
        </TableCell>
      </ContainerTable>
      <CardFooter>
        <div>
          <span>City</span>
          <Pill>Lausanne</Pill>
        </div>
        <div>
          <span>Activity</span>
          <Pill>Yoga</Pill>
          <Pill>Fitness</Pill>
        </div>
      </CardFooter>
    </article>
  )
}

export default CardUser
