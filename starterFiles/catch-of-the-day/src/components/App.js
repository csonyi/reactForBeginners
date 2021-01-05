import React from 'react'
import base from '../base'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'

import sampleFishes from '../sample-fishes'



class App extends React.Component {
    // State
    state = {
        fishes: {},
        order: {}
    }

    // Methods
    addFish = (fish) => {
        const fishes = {...this.state.fishes}

        fishes[`fish${Date.now()}`] = fish

        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({order})
    }

    // Lifecycle methods
    componentDidMount() {
        const { params } = this.props.match
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentWillUnmount() {
        console.log(this.ref);
        base.removeBinding(this.ref)
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key) => (
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        )
    }
}

export default App