import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const NumBtn = ({n, onClick}) => (
  <RaisedButton onClick={onClick} label={n} />
);

NumBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumBtn;