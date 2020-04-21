import React from 'react';
import './App.css';

class Counter extends React.Component {

  render = () => {
    return (
        <div className="counter">
            {this.props.number}
        </div>
    );
  };
}

export default Counter;
