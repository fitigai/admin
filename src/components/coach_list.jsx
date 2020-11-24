import React, { Component } from "react"

import Coach from "./coach"


class CoachList extends Component {
    state = {
        coachApi: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => {
                // console.log(response)
                this.setState({ coachApi: response, isLoading: false})
            })
    }

    render() {
        return(
            
            <div className="coach-list"> 
            return < Coach coachApi={this.state.coachApi} />
                    
            </div>
        )
    }
}

export default CoachList;