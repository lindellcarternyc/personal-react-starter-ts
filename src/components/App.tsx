import * as React from 'react'


interface IAppState {
  counter: number
}
class App extends React.Component<{}, IAppState> {
  public readonly state: IAppState = {
    counter: 0
  }
  public render() {
    return (
      <>
        <div>Current Count: {this.state.counter}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>x</button>
      </>
    )
  }

  private increment = () => {
    return this.setState(() => {
      return {
        counter: this.state.counter + 1
      }
    })
  }

  private decrement = () => {
    return this.setState(() => ({ counter: this.state.counter - 1 }))
  }

  private reset = () => this.setState({counter: 0})
}

export default App