import React from "react";
import { Button, Typography, Box } from "@mui/material";
import styles from "./styles";

type CounterProps = {
  counters: number[];

  increment: (index: number) => void;
  decrement: (index: number) => void;
  reset: (index: number) => void;

  addCounter: () => void;
  removeCounter: () => void;
  resetAll: () => void;
};

const Counter = ({
  counters,
  increment,
  decrement,
  reset,
  addCounter,
  removeCounter,
  resetAll
}: CounterProps) => {
  return (
    <Box>
      <Box sx={styles.buttons}>
        <Button variant="contained" onClick={addCounter}> Add counter</Button>
        <Button variant="contained" onClick={removeCounter}> Remove counter</Button>
        <Button variant="outlined" onClick={resetAll}> Reset all</Button>
      </Box>

      {counters.map((count, index) => (
        <Box key={index} sx={styles.container}>
          <Typography variant="h3">{count}</Typography>

          <Box sx={styles.buttons}>
            <Button variant="contained" onClick={() => increment(index)}>Increment</Button>
            <Button variant="contained" onClick={() => decrement(index)}>Decrement</Button>
            <Button variant="outlined" onClick={() => reset(index)}>Reset</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Counter;