import React, { useReducer } from "react";
import Counter from "../views/Counter";

type State = {
  counters: number[];
};

type Action =
  | { type: "ADD" }
  | { type: "REMOVE" }
  | { type: "INC"; index: number }
  | { type: "DEC"; index: number }
  | { type: "RESET"; index: number }
  | { type: "RESET_ALL" };

const initialState: State = {
  counters: [0]
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return {
        counters: [
          ...state.counters.map(c => (c % 2 === 0 ? c + 1 : c)),
          0
        ]
      };

    case "REMOVE":
      if (state.counters.length === 1) return state;

      return {
        counters: state.counters
          .slice(0, -1)
          .map(c => (c % 2 !== 0 ? c - 1 : c))
      };

    case "INC":
      return {
        counters: state.counters.map((c, i) =>
          i === action.index ? c + 1 : c
        )
      };

    case "DEC":
      return {
        counters: state.counters.map((c, i) =>
          i === action.index ? Math.max(0, c - 1) : c
        )
      };

    case "RESET":
      return {
        counters: state.counters.map((c, i) =>
          i === action.index ? 0 : c
        )
      };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
}

export default function CounterContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Counter
      counters={state.counters}
      increment={(i) => dispatch({ type: "INC", index: i })}
      decrement={(i) => dispatch({ type: "DEC", index: i })}
      reset={(i) => dispatch({ type: "RESET", index: i })}
      addCounter={() => dispatch({ type: "ADD" })}
      removeCounter={() => dispatch({ type: "REMOVE" })}
      resetAll={() => dispatch({ type: "RESET_ALL" })}
    />
  );
}