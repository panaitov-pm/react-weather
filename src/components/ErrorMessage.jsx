import PropTypes from 'prop-types';

const ErrorMessage = ({ title }) => (
  title
);

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ErrorMessage;
