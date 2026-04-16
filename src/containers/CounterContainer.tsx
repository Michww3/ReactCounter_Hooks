import React, { Component } from "react";
import Counter from "../views/Counter";

type State = {
  counters: number[];
};

class CounterContainer extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      counters: [0]
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  increment(index: number): void {
    this.setState(prev => ({
      counters: prev.counters.map((c, i) =>
        i === index ? c + 1 : c
      )
    }));
  }

  decrement(index: number): void {
    this.setState(prev => ({
      counters: prev.counters.map((c, i) =>
        i === index ? Math.max(0, c - 1) : c
      )
    }));
  }

  reset(index: number): void {
    this.setState(prev => ({
      counters: prev.counters.map((c, i) =>
        i === index ? 0 : c
      )
    }));
  }

  addCounter(): void {
    this.setState(prev => ({
      counters: [
        ...prev.counters.map(c => (c % 2 === 0 ? c + 1 : c)),
        0
      ]
    }));
  }

  removeCounter(): void {
    this.setState(prev => {
      if (prev.counters.length === 1) return null;

      return {
        counters: prev.counters
          .slice(0, -1)
          .map(c => (c % 2 !== 0 ? c - 1 : c))
      };
    });
  }

  resetAll(): void {
    this.setState({
      counters: [0]
    });
  }

  render() {
    return (
      <Counter
        counters={this.state.counters}
        increment={this.increment}
        decrement={this.decrement}
        reset={this.reset}
        addCounter={this.addCounter}
        removeCounter={this.removeCounter}
        resetAll={this.resetAll}
      />
    );
  }
}

export default CounterContainer;