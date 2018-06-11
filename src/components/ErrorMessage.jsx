import PropTypes from 'prop-types';
import React from 'react';


const ErrorMessage = ({ title }) => (
  title
);

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ErrorMessage;
