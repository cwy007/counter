import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CounterType } from '../actions';

class CounterComp extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrementAsync = this.onIncrementAsync.bind(this);
    this.onDouble = this.onDouble.bind(this);
  }

  onIncrement() {
    this.props.vstore.dispatch({ type: CounterType.INCREMENT });
  }

  onDecrement() {
    this.props.vstore.dispatch({ type: CounterType.DECREMENT });
  }

  onDouble() {
    this.props.vstore.dispatch({ type: CounterType.DOUBLE });
  }

  onIncrementAsync() {
    setTimeout(this.onIncrement, 1000);
  }

  render() {
    const value = this.props.value;
    return (
      <span>
        <h3>基于React + Redux 的计数器应用</h3>
        <p>计数器：{value} 次.</p>
        <p>
          {' '}
          <button onClick={this.onIncrement}>+1</button>
          {' '}
          <button onClick={this.onDecrement}>-1</button>
          {' '}
          <button onClick={this.onDouble}> Double </button>
          {' '}
          <button onClick={this.onIncrementAsync}> Increment Async</button>
        </p>
      </span>
    );
  }
}

CounterComp.propTypes = {
  value: PropTypes.number.isRequired,
  store: PropTypes.object
}

export default CounterComp;
