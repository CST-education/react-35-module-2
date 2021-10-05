import './App.scss'
import { Component } from 'react'
import { Counter } from './components/Counter/Counter'
// function App() {

//   return <div className="App"></div>
// }
class App extends Component {
  state = {
    counter: 0,
  }

  handleDecrement = () => {
    // просто перепишем текущий стейт
    // this.setState({
    //   counter: this.state.counter - 1,
    // })
    // если нужно отталкиваться от предыдущего значения
    // this.setState((prevState) => {
    //   return {
    //     counter: prevState.counter - 1,
    //   }
    // })
    // или короче
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }))
  }
  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }))
  }

  render() {
    console.log(this.props)
    const { counter } = this.state
    const { handleDecrement, handleIncrement } = this
    return (
      <div className="App">
        <h1>FE-35</h1>
        <Counter
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        {/* <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <p>{counter}</p>
          <button onClick={handleIncrement}>+</button>
        </div> */}
      </div>
    )
  }
}
export default App

// click => onClick
// submit => onSubmit
