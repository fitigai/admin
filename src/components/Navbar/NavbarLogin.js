import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Popover, Position, Menu, HomeIcon, CircleArrowRightIcon, ListColumnsIcon, Button, MenuIcon, LogOutIcon, Avatar, Tooltip, IconButton, SearchIcon, Paragraph, CogIcon, ChatIcon } from "evergreen-ui"
import { NavbarTools, NavMobile } from "./Navbar.elements"

function NavbarLogin() {
  const [isShown, setIsShown] = useState(false)
  return (
    <NavbarTools>
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={40} />
      <NavMobile
        content={
          <Menu>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={HomeIcon}>Home</Menu.Item>
              <Menu.Item icon={ListColumnsIcon} secondaryText="⌘R">
                Training List
              </Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={LogOutIcon}>
                <Link to="/signin">Log out</Link>
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginY={15} iconAfter={MenuIcon}>
          Menu
        </Button>
      </NavMobile>
    </NavbarTools>
  )
}

export default NavbarLogin
