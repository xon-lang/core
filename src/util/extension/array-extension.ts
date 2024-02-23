import { Boolean2, Integer, Nothing, Number2, Something, String2, nothing } from '../../lib/core';

// Array
Array.prototype.takeWhile = function takeWhile<T>(
  predicate: (value: T, index: Integer) => Something,
  startIndex = 0,
): T[] {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }

  return this.slice(startIndex, this.length);
};

Array.prototype.findLast = function <T>(predicate: (value: T, index: Integer, obj: T[]) => Boolean2): T | Nothing {
  const index = this.findLastIndex(predicate);

  if (index < 0) {
    return nothing;
  }

  return this[index] ?? nothing;
};

Array.prototype.firstOrNull = function <T>(): T | Nothing {
  return this[0] ?? nothing;
};

Array.prototype.lastOrNull = function <T>(): T | Nothing {
  return this[this.length - 1] ?? nothing;
};

Array.prototype.first = function <T>(): T {
  return this[0];
};

Array.prototype.last = function <T>(): T {
  return this[this.length - 1];
};

Array.prototype.removeFirst = function <T>(): T[] {
  this.splice(0, 1);

  return this;
};

Array.prototype.removeLast = function <T>(): T[] {
  this.splice(-1, 1);

  return this;
};

Array.prototype.sortStrings = function (): String2[] {
  return (this as String2[]).sort((a, b) => a.localeCompare(b));
};

Array.prototype.sum = function <T>(select: (value: T, index: Integer, obj: T[]) => Number2): Number2 {
  return this.reduce((sum, val, index, array) => sum + select(val, index, array), 0);
};

Array.prototype.findMap = function <T, V>(predicate: (value: T, index: Integer, obj: T[]) => V | Nothing): V | Nothing {
  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      return result;
    }
  }

  return nothing;
};
