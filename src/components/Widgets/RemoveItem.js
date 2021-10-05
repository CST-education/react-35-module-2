import { Component, createRef } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './RemoveItem.scss';
import { GadgetWindow } from './WindowElem';

export class DeleteButton extends Component {
  state = {
    isOpen: this.props.isOpen,
  };
  // получаем доступ к текущему элементу через createRef()
  ref = createRef();

  // создаем метод изменения свойства видимости в стейте
  toggleState = () => {
    //  если текущее значение true выходим из метода
    if (this.state.isOpen) return;
    // изменяем стейт от предыдущего состояния
    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }));
    // фокусируемся на текущем элементе
    this.ref.current.focus();
  };

  keydownHandler = event => {
    // при фокусе табом на кнопках виджета
    // закрывает виджет по нажатию на 'Enter' || 'Escape'
    if (event.key === 'Enter' || event.key === 'Escape') {
      this.toggleState();
    }
  };

  handleClick = () => this.setState({ isOpen: false });

  render() {
    // деструктуризировать стейт и методы
    const { isOpen } = this.state;
    const { ref, keydownHandler, toggleState, handleClick } = this;
    return (
      <Flipper flipKey={isOpen} spring="stiff" stagger>
        {isOpen ? (
          <GadgetWindow
            // переименовано имя пропа для передачи в компонент виджета ссылки на дом-узел
            unitRef={ref}
            isOpen={isOpen}
            toggleState={toggleState}
            keydownHandler={keydownHandler}
            handleClick={handleClick}
            textObj={this.props.text}
          />
        ) : (
          <Flipped flipId="wrapper">
            <div
              ref={ref}
              tabIndex={0}
              role="button"
              className="button primary"
              onClick={toggleState}
              onKeyDown={keydownHandler}
            >
              <Flipped flipId="action">
                <span className="action">Delete</span>
              </Flipped>
            </div>
          </Flipped>
        )}
      </Flipper>
    );
  }
}
