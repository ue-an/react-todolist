import React from "react";

const FilterButton = props => {
 return (
        <button type='button' className='btn toggle-btn' aria-pressed={ props.pressed } id={props.id}>
          <span className='visually-hidden'>Show </span>
          <span>{ props.label }</span>
          <span className='visually-hidden'> tasks</span>
        </button>
 );
}

export { FilterButton };