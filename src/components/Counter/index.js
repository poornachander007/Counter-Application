import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }
  onDecrement = () => {
    this.setState(preState => ({count: preState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="count">{count}</h1>
        <div>
          <button onClick={this.onDecrement} className="button">
            Decrement
          </button>
          <button onClick={this.onIncrement} className="button">
            Increment
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
