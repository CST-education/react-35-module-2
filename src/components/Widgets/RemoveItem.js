import { Component } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import './RemoveItem.scss'

export class DeleteButton extends Component {
  state = {
    //
  }
  // получаем доступ к текущему элементу через createRef()
  //

  // создаем метод изменения свойства видимости в стейте
  toggleState = () => {
    //  если текущее значение true выходим из метода
    //
    // изменяем стейт от предыдущего состояния
    //
    // фокусируемся на текущем элементе
    //
  }

  keydownHandler = (event) => {
    // тогл свойства стейта по кнопке 'Enter'
  }
  render() {
    // деструктуризировать стейт и методы
    return (
      <Flipper flipKey={this.state.isOpen} spring="stiff" stagger>
        {this.state.isOpen ? (
          <Flipped flipId="wrapper">
            <div
              ref={this.ref}
              tabIndex={this.state.isOpen ? false : 0}
              role="dialog"
              className={`dialog animated-in`}
              //   onClick={}
              //   onKeyDown={}
            >
              <p className="title content">Delete this item?</p>
              <p class="content">
                This operation will permenantly delete this item and all its
                dependencies. This action <strong>cannot be undone</strong>.
              </p>
              <button
                className="button secondary content"
                // onClick={}
              >
                Oh no, bring me back
              </button>
              <button
                className="button primary content"
                // onClick={}
              >
                I understand, delete it
              </button>
            </div>
          </Flipped>
        ) : (
          <Flipped flipId="wrapper">
            <div
              //   ref={}
              tabIndex={0}
              role="button"
              className="button primary"
              //   onClick={}
              //   onKeyDown={}
            >
              <Flipped flipId="action">
                <span className="action">Delete</span>
              </Flipped>
            </div>
          </Flipped>
        )}
      </Flipper>
    )
  }
}
