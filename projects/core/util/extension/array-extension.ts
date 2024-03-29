import {Array2, Boolean2, Integer, Nothing, Number2, Something, String2, nothing} from '../../lib/core';

// Array
Array.prototype.takeWhile = function <T>(
  predicate: (value: T, index: Integer) => Something,
  startIndex = 0,
): Array2<T> {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }

  return this.slice(startIndex, this.length);
};

Array.prototype.findLast = function <T>(
  predicate: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): T | Nothing {
  const index = this.findLastIndex(predicate);

  if (index < 0) {
    return nothing;
  }

  return this[index];
};

Array.prototype.first = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): T | Nothing {
  if (this.length === 0) {
    return nothing;
  }

  if (!predicate) {
    return this[0] ?? nothing;
  }

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    if (predicate(element, index, this)) {
      return element;
    }
  }

  return nothing;
};

Array.prototype.last = function <T>(predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2): T | Nothing {
  if (this.length === 0) {
    return nothing;
  }

  if (!predicate) {
    return this[this.length - 1] ?? nothing;
  }

  for (let index = this.length - 1; index >= 0; index--) {
    const element = this[index];

    if (predicate(element, index, this)) {
      return element;
    }
  }

  return nothing;
};

Array.prototype.removeFirst = function <T>(): Array2<T> {
  this.splice(0, 1);

  return this;
};

Array.prototype.removeLast = function <T>(): Array2<T> {
  this.splice(-1, 1);

  return this;
};

Array.prototype.sortStrings = function (): Array2<String2> {
  return (this as Array2<String2>).sort((a, b) => a.localeCompare(b));
};

Array.prototype.sum = function <T>(select: (value: T, index: Integer, array: Array2<T>) => Number2): Number2 {
  return this.reduce((sum, val, index, array) => sum + select(val, index, array), 0);
};

Array.prototype.findMap = function <T, V>(
  predicate: (value: T, index: Integer, array: Array2<T>) => V | Nothing,
): V | Nothing {
  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      return result;
    }
  }

  return nothing;
};

Array.prototype.filterMap = function <T, V>(
  predicate: (value: T, index: Integer, array: Array2<T>) => V | Nothing,
): Array2<V> {
  const newArray: Array2<V> = [];

  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      newArray.push(result);
    }
  }

  return newArray;
};

Array.prototype.count = function <T>(predicate: (value: T, index: Integer, array: Array2<T>) => Boolean2): Integer {
  return this.reduce((sum, val, index, array) => sum + (predicate(val, index, array) ? 1 : 0), 0);
};

Array.prototype.sortBy = function <T>(select: (value: T) => Integer, ascending: Boolean2 = true): Array2<T> {
  if (ascending) {
    return [...this].sort((a, b) => select(a) - select(b));
  }

  return [...this].sort((a, b) => select(b) - select(a));
};

Array.prototype.splitBy = function <T>(
  predicate: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): Array2<{splitter: T | Nothing; items: Array2<T>}> {
  const result: Array2<{splitter: T | Nothing; items: Array2<T>}> = [];

  for (let index = 0; index < this.length; index++) {
    const item = this[index];

    if (predicate(item, index, this)) {
      result.push({splitter: item, items: []});

      continue;
    }

    if (!result.last()) {
      result.push({splitter: nothing, items: []});
    }

    result.last()?.items.push(item);
  }

  return result;
};
