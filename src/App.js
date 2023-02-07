import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <form>
        <h2 className='label-wrapper'>
          <label htmlFor='new-todo-input' className='label__lg'>
            What needs to be done?
          </label>
        </h2>
        <input
        id='new-todo-input'
        className='input input__lg'
        name='text'
        autoComplete='off'
        type="text"
        />
        <button type='submit' className='btn btn__primary btn__lg'>
          Add
        </button>
      </form>
      <div className='filters btn-group stack-exception'>
        <button type='button' className='btn toggle-btn' aria-pressed='false'>
          <span className='visually-hidden'>Show</span>
          <span>all</span>
          <span className='visually-hidden'>tasks</span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default App;
