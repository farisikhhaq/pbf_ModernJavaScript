import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
export class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const { count } = this.state
        return (
            <h2 onMouseOver={this.incrementCount}>
                {this.props.name} Hovered {count} Times
            </h2>
        )
        return
    }
}

export default UpdatedComponent(HoverCounter)