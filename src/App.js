
import React from "react"
import { Button, Pane, Text, majorScale, BanCircleIcon, TickCircleIcon, WarningSignIcon, InfoSignIcon } from "evergreen-ui"

function App() {
  return (
    <div className="app">
      <aside background="gray900" className="app__aside">

      </aside>
      <header>
        <Pane>
          <BanCircleIcon color="danger" marginRight={16} />
          <TickCircleIcon color="success" marginRight={16} />
          <WarningSignIcon color="warning" marginRight={16} />
          <InfoSignIcon color="info" marginRight={16} />
        </Pane>
      </header>
      <main>
        <section>wfe</section>
      </main>

    </div>
  )
}

export default App
