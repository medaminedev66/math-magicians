import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
    };
    this.showResult = this.showResult.bind(this);
  }

  showResult = (e) => {
    this.setState((state) => ({
      obj: calculate(state.obj, e.target.value),
    }));
  };

  render() {
    const { obj } = this.state;
    let result = 0;
    if (obj !== null) {
      if (obj.next !== null) {
        result = obj.next;
      } else result = obj.total;
    }
    return (
      <div className="Calculator">
        <span className="input">{result}</span>
        <button
          type="button"
          value="AC"
          className="char"
          onClick={this.showResult}
        >
          AC
        </button>
        <button
          value="+/-"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          +/-
        </button>
        <button
          value="%"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          %
        </button>
        <button
          value="÷"
          type="button"
          className="char orange"
          onClick={this.showResult}
        >
          ÷
        </button>
        <button
          type="button"
          value="7"
          className="char"
          onClick={this.showResult}
        >
          7
        </button>
        <button
          value="8"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          8
        </button>
        <button
          value="9"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          9
        </button>
        <button
          value="x"
          type="button"
          className="char orange"
          onClick={this.showResult}
        >
          x
        </button>
        <button
          value="4"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          4
        </button>
        <button
          value="5"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          5
        </button>
        <button
          value="6"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          6
        </button>
        <button
          value="-"
          type="button"
          className="char orange"
          onClick={this.showResult}
        >
          -
        </button>
        <button
          value="1"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          1
        </button>
        <button
          value="2"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          2
        </button>
        <button
          value="3"
          type="button"
          className="char"
          onClick={this.showResult}
        >
          3
        </button>
        <button
          value="+"
          type="button"
          className="char orange"
          onClick={this.showResult}
        >
          +
        </button>
        <button
          value="0"
          type="button"
          className="zero"
          onClick={this.showResult}
        >
          0
        </button>
        <button
          value="."
          type="button"
          className="char"
          onClick={this.showResult}
        >
          .
        </button>
        <button
          value="="
          type="button"
          className="char orange"
          onClick={this.showResult}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
