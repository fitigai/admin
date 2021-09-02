import React from "react"
import { Link } from "react-router-dom"
import { Menu, HomeIcon, CircleArrowRightIcon, ListColumnsIcon, LogOutIcon, Avatar, ChevronDownIcon, Popover } from "evergreen-ui"
import { NavbarTools, NavbarButton } from "./Navbar.elements"
import SwicthIcon from "../Icon/SwitchIcon"
import { COLORS_VARIABLES } from "../../styles/GlobalStyleVariable"

function NavbarLogin() {
  return (
    <>
      <NavbarTools rightPosition="300px">
        <NavbarButton backgroundButton="transparent">
          <SwicthIcon icon="mail" colorIcon={COLORS_VARIABLES.gray} heightIcon="30px" />
        </NavbarButton>
      </NavbarTools>
      <NavbarTools rightPosition="200px">
        <NavbarButton backgroundButton="transparent">
          <SwicthIcon icon="chatBubble" colorIcon={COLORS_VARIABLES.gray} heightIcon="60px" />
        </NavbarButton>
      </NavbarTools>
      <NavbarTools rightPosition="30px">
        <Popover
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
        </Popover>
      </NavbarTools>
    </>
  )
}

export default NavbarLogin
