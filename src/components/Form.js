import React from "react";

const Form = (props) => {
 return (
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
 );
}
export { Form };