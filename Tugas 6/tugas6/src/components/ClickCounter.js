import { Component } from "react";
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {


    render() {
        const { count } = this.state
        return (
            <button onClick={this.incrementCount}>
                {this.props.name} Clicked {count} Times
            </button>
        )
    }
}
export default UpdatedComponent(ClickCounter)