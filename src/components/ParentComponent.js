import React, { Component } from 'react';
// Import Component
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    state = {
        car: 'Mercedes Benz',
        money: 20
    }

    changeCar = () => {
        this.setState({ car: 'Porsche' })
    }

    addMoreCash = () => {
        this.setState({ money: 50 })
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponent cash={this.state.money} />
                <button onClick={this.addMoreCash}>Add More Cash</button>
            </div>
        )
    }
}

export default ParentComponent;