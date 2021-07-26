import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <h1>
      { result }
    </h1>
  </>
);

Display.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  result: '0',
};

Display.propTypes = {
  // eslint-disable-next-line react/require-default-props
  result: PropTypes.string.isRequired,
};

export default Display;
