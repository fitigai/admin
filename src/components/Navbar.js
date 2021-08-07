import React from "react"
import { Link } from "react-router-dom"
import Logo from "../icons/logos/Logo"
import MobileAside from "../containers/MobileAside"
import { Popover, Position, Menu, PeopleIcon, CircleArrowRightIcon, EditIcon , Button, MenuIcon, LogInIcon } from 'evergreen-ui'

export const Navbar = props => {

  return (
    <header className="navbar--header">
      {/* LOGO SITE */}
      <span className="navbar--logo">
        <Link to="/">
          <Logo />
        </Link>
      </span>
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <Menu>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={PeopleIcon}>
                Share...
              </Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
              <Menu.Item icon={EditIcon} secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={LogInIcon}>
                <Link to="/login">Log-in </Link>
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginY={15} marginRight={16} iconAfter={MenuIcon}>Menu</Button>
      </Popover>
      <MobileAside></MobileAside>
    </header>
  )
}


export default (Navbar)
