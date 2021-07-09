import React from "react"
import { Link } from "react-router-dom"
import Logo from "../icons/logos/Logo"
import { Popover, Position, Menu, PeopleIcon, CircleArrowRightIcon, EditIcon, TrashIcon, Button } from 'evergreen-ui'



export const Navbar = props => {


  return (
    <header className="navbar--header">
      {/* LOGO SITE */}
      <span className="navbar--logo">
        <Link to="/">
          <Logo />
        </Link>
      </span>
       <Button marginRight={16} intent="none">
        Logout
      </Button>
      <Popover
        // position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item disabled icon={PeopleIcon}>
                Share...
              </Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
              <Menu.Item icon={EditIcon} secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item disabled icon={TrashIcon} intent="danger">
                Delete...
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginRight={16}>With Disabled Items</Button>
      </Popover>
    </header>
  )
}


export default (Navbar)
