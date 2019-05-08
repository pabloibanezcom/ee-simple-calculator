/* eslint no-eval: 0 */

import React from 'react';
import CalculatorButton from '../../components/CalculatorButton/CalculatorButton';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';
import { default as buttonRows } from '../../data/buttons.json';

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentOperation: ''
    };

    this.addNumberOrOperation = this.addNumberOrOperation.bind(this);
    this.clear = this.clear.bind(this);
    this.removeLast = this.removeLast.bind(this);
    this.doCalculation = this.doCalculation.bind(this);

    this.actions = {
      number: this.addNumberOrOperation,
      operation: this.addNumberOrOperation,
      clear: this.clear,
      removeLast: this.removeLast,
      calculation: this.doCalculation
    }
  }

  addNumberOrOperation(element) {
    if (this.state.currentOperation.length >= 22) {
      return;
    }
    if (element === '.' && this.state.currentOperation.includes('.')) {
      return;
    }
    this.setState((prevState) => ({ currentOperation: prevState.currentOperation + element }));
  }

  clear() {
    this.setState({ currentOperation: '' });
  }

  removeLast() {
    this.setState((prevState) => ({ currentOperation: prevState.currentOperation.slice(0, -1) }));
  }

  doCalculation() {
    try {
      const result = eval(this.state.currentOperation);
      this.setState({ currentOperation: result });
    }
    catch (err) {
      console.log('Operation could not be completed');
    }
  }

  render() {
    const { currentOperation } = this.state;
    return <div className="calculator">
      <div className="calculator--display">
        <ResultDisplay result={currentOperation} />
      </div>
      <div className="calculator--buttons">
        {buttonRows.map((row, i) => {
          return <div className="calculator--row" key={i}>
            {row.map(button => <CalculatorButton
              key={button.value}
              label={button.value}
              type={button.type}
              size={button.size}
              onClick={() => this.actions[button.action](button.value)}
            />)}
          </div>
        })}
      </div>
    </div>
  }
};

export default Calculator;