import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {
      result,
    } = this.props;

    return (
      <div>
        <h1>
          { result }
        </h1>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
