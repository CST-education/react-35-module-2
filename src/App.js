import './App.scss';
import { Component } from 'react';
import { DeleteButton } from './components/Widgets/RemoveItem';
import { Counter } from './components/Counter/Counter';

const text = {
  title: 'title-1',
  content: 'content-1',
  backBtn: 'go back',
  deleteBtn: 'delete',
};

class App extends Component {
  state = {
    counter: 0,
    isOpen: false,
  };

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
    if (this.state.counter > 0) {
      this.setState(prevState => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter, isOpen } = this.state;
    const { handleDecrement, handleIncrement } = this;
    return (
      <div className="App">
        <h1>FE-35</h1>
        <DeleteButton isOpen={!isOpen} text={text} />
        <DeleteButton isOpen={isOpen} />
        <Counter
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
    );
  }
}
export default App;

// click => onClick
// submit => onSubmit
