import s from './Counter.module.scss';
export function Counter({ counter, handleDecrement, handleIncrement }) {
  return (
    <div className={s.counter}>
      <button
        className={`${s.btn} ${s.decrementBtn}`}
        onClick={handleDecrement}
      >
        -
      </button>
      <p className={`${s.text} ${s.counterValue}`}>{counter}</p>
      <button
        className={`${s.btn} ${s.incrementBtn}`}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
