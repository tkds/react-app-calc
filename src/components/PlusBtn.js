import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const PlusBtn = ({ onClick }) => (
  <RaisedButton onClick={ onClick } label='+' />
);

PlusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlusBtn;