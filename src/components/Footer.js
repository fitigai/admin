import React, { useState } from "react"
import { TabNavigation, Tab } from 'evergreen-ui'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <TabNavigation marginBottom={16}>
          <Tab>
            <Link to="/">Home</Link>
        </Tab>
        <Tab>
            <Link to="/about">About-us</Link>
        </Tab>
        <Tab>
            <Link to="/terms">Terms</Link>
          </Tab>
      </TabNavigation>
    </footer>
  )
}

export default Footer