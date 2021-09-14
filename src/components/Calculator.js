import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <span className="input">0</span>
        <span className="char">AC</span>
        <span className="char">+/-</span>
        <span className="char">%</span>
        <span className="char orange">/</span>
        <span className="char">7</span>
        <span className="char">8</span>
        <span className="char">9</span>
        <span className="char orange">*</span>
        <span className="char">4</span>
        <span className="char">5</span>
        <span className="char">6</span>
        <span className="char orange">-</span>
        <span className="char">1</span>
        <span className="char">2</span>
        <span className="char">3</span>
        <span className="char orange">+</span>
        <span className="zero">0</span>
        <span className="char">.</span>
        <span className="char orange">=</span>
      </div>
    );
  }
}

export default Calculator;
