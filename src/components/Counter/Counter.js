export function Counter({ counter, handleDecrement, handleIncrement }) {
  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}
