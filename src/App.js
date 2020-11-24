import React, { Component } from "react"


import Coach from "./components/coach"
import CoachList from "./components/coach_list"


class App extends Component {
    constructor(props)  {
    super(props)
    }

    render() {
        return(
            <div>
                <div>
                    <div>All Coach</div>
                    <div><CoachList /></div>
                </div>
               
            </div>
        )
    }
}

export default App;