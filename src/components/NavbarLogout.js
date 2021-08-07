import React from "react"
import { Link } from "react-router-dom"
import { Popover, Position, Menu, HomeIcon, CircleArrowRightIcon, ListColumnsIcon , Button, MenuIcon, LogInIcon } from 'evergreen-ui'

export const NavbarLogout = props => {

  return (
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <Menu>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={HomeIcon}>
                Home
              </Menu.Item>
              <Menu.Item icon={ListColumnsIcon} secondaryText="⌘R">
                Training List
              </Menu.Item>
              <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
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
  )
}


export default NavbarLogout
