import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title, onAdd, showTask }) => {
  return (
    <header className = 'header'>
      <h2> {title} </h2>
      <Button onAdd = {onAdd} showTask = {showTask} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Tasks Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
