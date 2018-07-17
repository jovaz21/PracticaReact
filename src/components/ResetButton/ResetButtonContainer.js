import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import { StatusResetAction, GameResetAction } from '../../store';

class ResetButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: props.isFinished,
    };
  }

  // On Reset Game
  onResetGame() {
    const { doStatusResetAction, doGameResetAction } = this.props;
    doStatusResetAction();
    doGameResetAction();
  }

  static getDerivedStateFromProps({ isFinished }) {
    return {
      isFinished,
    };
  }

  render() {
    const { isFinished } = this.state;
    if (isFinished) {
      return <ResetButton onClick={e => this.onResetGame(e)} />;
    }
    return <div />;
  }
}
ResetButtonContainer.defaultProps = {
  ...ResetButton.defaultProps,
  onClick: () => {},
};
ResetButtonContainer.propTypes = {
  ...ResetButton.propTypes,
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({
  isFinished: state.status.isFinished,
});
const mapDispatchToProps = {
  doStatusResetAction: StatusResetAction,
  doGameResetAction: GameResetAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetButtonContainer);
