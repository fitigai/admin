import React from "react"
import { Link } from "react-router-dom"
import { Menu, HomeIcon, CircleArrowRightIcon, ListColumnsIcon, LogOutIcon, Avatar, ChevronDownIcon } from "evergreen-ui"
import { NavbarTools, NavMobile, NavbarButton } from "./Navbar.elements"

function NavbarLogin() {
  return (
    <NavbarTools>
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
        <NavbarButton>
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={40} />
          <small>Menu</small>
          <ChevronDownIcon />
        </NavbarButton>
      </NavMobile>
    </NavbarTools>
  )
}

export default NavbarLogin
