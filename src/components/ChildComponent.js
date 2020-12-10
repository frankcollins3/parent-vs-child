import React, { Component } from 'react';


class ChildComponent extends Component {
    constructor(props) {
        super()
        this.state = {
            cash: props.cash,
            tools: 'Lawnmower'
        }
    }

    earnMoney = () => {
        let newAmount = parseInt(this.props.cash) + 100;
        this.setState({ cash: newAmount })
    }

    render() {
        return (
            <div>
                <h1>Child Component</h1>
                <p>Money from Parent: {this.props.cash}</p>
                <p>Cash: {this.state.cash}</p>
                <button onClick={this.earnMoney}>Earn Money</button>
            </div>
        )
    }
}

export default ChildComponent;