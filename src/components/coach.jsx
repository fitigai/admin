import React, { Component } from "react"

import "../stylesheets/cards.scss"

class Coach extends Component {
    
    render() {
       
        console.log(this.props.coachApi)
        
        const cardBg = {
            backgroundImage: `url(${"http://lorempixel.com/400/200/people"})`
        }
       
        
        return(
                <div  >
                    {this.props.coachApi.map((coach) => (
                        <div className="card" style={cardBg}>
                        <h1 className="card-category" >{coach.name}</h1>
                        <div className="card-description">
                        <p>{coach.email}</p>
                        <p>{coach.phone}</p>
                        </div>
                        </div>
                    ))}  
                </div>
            
        )
    }
}

export default Coach;
