import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ color, onAdd, showTask}) => {
  return <button 
  onClick = {onAdd} 
  style = { showTask ? {background: 'red'} : {background: color} } 
  className='btn'> {showTask ? 'Close' : 'Add'} </button>;
}

Button.defaultProps = {
  color: 'green',
  text: 'Add'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}
export default Button
