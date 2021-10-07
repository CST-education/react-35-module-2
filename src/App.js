import './App.scss';
import { Component } from 'react';
import { Form } from './components/Forms/Form';
// import { DeleteButton } from './components/Widgets/RemoveItem';
// import { Counter } from './components/Counter/Counter';

// const text = {
//   title: 'title-1',
//   content: 'content-1',
//   backBtn: 'go back',
//   deleteBtn: 'delete',
// };

class App extends Component {
  state = {
    counter: 0,
    isOpen: false,

    allProducts: [],
  };

  // handleDecrement = () => {
  //   // просто перепишем текущий стейт
  //   // this.setState({
  //   //   counter: this.state.counter - 1,
  //   // })
  //   // если нужно отталкиваться от предыдущего значения
  //   // this.setState((prevState) => {
  //   //   return {
  //   //     counter: prevState.counter - 1,
  //   //   }
  //   // })
  //   // или короче
  //   if (this.state.counter > 0) {
  //     this.setState(prevState => ({
  //       counter: prevState.counter - 1,
  //     }));
  //   }
  // };
  // handleIncrement = () => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + 1,
  //   }));
  // };

  addNewProduct = obj => {
    this.setState(prevState => {
      return {
        allProducts: [...prevState.allProducts, obj],
      };
    });
  };

  render() {
    console.log('state:', this.state.title, this.state.desc);
    return (
      <div className="App">
        <h1>FE-35</h1>
        <Form addNewProduct={this.addNewProduct} />
      </div>
    );
  }
}
export default App;

// const { counter, isOpen } = this.state;
// const { handleDecrement, handleIncrement } = this;
// {/* <DeleteButton isOpen={!isOpen} text={text} />
// <DeleteButton isOpen={isOpen} /> */}
// {/* <Counter
//   counter={counter}
//   handleDecrement={handleDecrement}
//   handleIncrement={handleIncrement}
// /> */}

// click => onClick
// submit => onSubmit
