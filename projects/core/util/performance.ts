import {Anything, Array2, Integer, String2} from '../lib/core';

export function performanceTimer(name: String2) {
  const start = performance.now();

  return {
    stop() {
      const end = performance.now();
      const timespan = end - start;

      return {
        name,
        timespan,
      };
    },
  };
}

export function performanceIterations(count: Integer, fn: () => Anything): {min: Integer; max: Integer; avg: Integer} {
  let min = Infinity;
  let max = 0;
  const timespans: Array2<Integer> = [];

  for (let i = 0; i < count; i++) {
    const start = performance.now();

    fn();

    const stop = performance.now();
    const timespan = stop - start;
    timespans.push(timespan);

    min = Math.min(min, timespan);
    max = Math.max(max, timespan);
  }

  const avg = timespans.sum((x) => x) / count;

  return {
    min,
    max,
    avg,
  };
}
