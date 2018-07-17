import React, { Component } from 'react';
import { connect } from 'react-redux';
import Status from './Status';

class StatusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPlayer: props.nextPlayer,
      curWinner: props.curWinner,
      isFinished: props.isFinished,
    };
  }

  static getDerivedStateFromProps({ nextPlayer, curWinner, isFinished }) {
    return {
      nextPlayer,
      curWinner,
      isFinished,
    };
  }

  render() {
    const { nextPlayer, isFinished, curWinner } = this.state;
    return <Status nextPlayer={nextPlayer} isFinished={isFinished} curWinner={curWinner} />;
  }
}
StatusContainer.defaultProps = {
  ...Status.defaultProps,
};
StatusContainer.propTypes = {
  ...Status.propTypes,
};

const mapStateToProps = state => ({
  nextPlayer: state.status.nextPlayer,
  curWinner: state.status.curWinner,
  isFinished: state.status.isFinished,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusContainer);
