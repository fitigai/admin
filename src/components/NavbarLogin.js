import React, {useState} from "react"
import { Link } from "react-router-dom"
import { Popover, Position, Menu, HomeIcon, CircleArrowRightIcon, ListColumnsIcon , Button, MenuIcon, LogInIcon, Avatar, Tooltip, IconButton, SearchIcon, ChatIcon, SideSheet, Paragraph, CogIcon} from 'evergreen-ui'

function NavbarLogin() {
  const [isShown, setIsShown] = useState(false)
  return (
    <div>
      <Tooltip content="Search-box">
        <IconButton icon={SearchIcon} />
      </Tooltip>
      <Tooltip content="Message">
        <IconButton icon={ChatIcon} />
      </Tooltip>
      <Avatar
        src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
        name="Alan Turing"
        size={40}
      />
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
                <Link to="/login">Log-in</Link>
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button marginY={15} iconAfter={MenuIcon}>Menu</Button>
      </Popover>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={100}
          />
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Button onClick={() => setIsShown(true)} marginY={15} iconAfter={CogIcon} marginRight={16}>Settings</Button>
  
    </div>
  )
}

export default NavbarLogin