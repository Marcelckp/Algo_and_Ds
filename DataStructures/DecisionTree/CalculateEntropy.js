function calculateEntropy(input) {
  const m = new Map();

  input.forEach((val) => {
    if (m.has(val)) m.set(val, +m.get(val) + 1);
    else m.set(val, 1);
  });

  const sum = Array.from(m.entries()).reduce((acc, val) => {
    const ratio = val[1] / input.length;
    const value = -ratio * Math.log2(ratio);
    return acc + value;
  }, 0);

  return sum;
}

// The higher the entropy value the greater the measure of uncertainty and randomness in the data set.
console.log(calculateEntropy([1, 1, 2, 2])); // 1.0000
console.log(calculateEntropy([1, 2, 3, 4, 5])); // 2.3219
