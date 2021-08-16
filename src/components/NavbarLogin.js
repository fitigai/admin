import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Popover, Position, Menu, HomeIcon, CircleArrowRightIcon, ListColumnsIcon, Button, MenuIcon, LogOutIcon, Avatar, Tooltip, IconButton, SearchIcon, ChatIcon, SideSheet, Paragraph, CogIcon } from "evergreen-ui"
import { DEVICE } from "../styles/GlobalStyleVariable"

const NavbarTools = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SideSheetHiddenUp = styled(SideSheet)`
  display: block;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`

const ButtonHiddenUp = styled(Button)`
  display: block;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`

function NavbarLogin() {
  const [isShown, setIsShown] = useState(false)
  return (
    <NavbarTools>
      <Tooltip>
        <IconButton icon={SearchIcon} />
      </Tooltip>
      <Tooltip content="Message">
        <IconButton icon={ChatIcon} />
      </Tooltip>
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={40} />
      <Popover
        position={Position.BOTTOM_RIGHT}
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
      </Popover>
      <SideSheetHiddenUp className="hidden-large" isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" name="Alan Turing" size={100} className="navbar-gravatar" />
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheetHiddenUp>
      <ButtonHiddenUp onClick={() => setIsShown(true)} marginY={15} iconAfter={CogIcon} marginRight={16}>
        Settings
      </ButtonHiddenUp>
    </NavbarTools>
  )
}

export default NavbarLogin
