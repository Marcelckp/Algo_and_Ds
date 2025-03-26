const log2 = (val) => {
  return Math.log(val) / Math.log(2);
};

const freq = (arr, val) => {
  return arr.reduce((acc, v) => (v === val ? (acc += 1) : acc), 0);
};

var calculateEntropy = function (input) {
  const set = new Set(input);
  const len = input.length;``
  let entropy = 0;

  for (let val of set) {
    const count = freq(input, val);
    const prob = count / len;
    const localEntropy = -1 * prob * log2(prob);
    entropy += localEntropy;
  }

  return entropy;
};

function calculateMaxInfoGain(petal_length, species) {
  const len = species.length;
  let maxInfoGain = 0;

  const totalEntropy = calculateEntropy(species);

  for (let petalLength of petal_length) {
    // We skip this otherwise their will be chances for all of the elements to be in one of the splits and that will give us the lowest info gain. Comment this out and see it for yourself
    if (petalLength === Math.max(...petal_length)) continue;

    // We then split the array based on the current petal length during the iteration and find elements less than and greater than the current petal and split the array into 2 groups and find the maximum information gain
    const groupA = species.filter((v, i) => petal_length[i] <= petalLength);
    const groupB = species.filter((v, i) => petal_length[i] > petalLength);

    console.log("group a -> ", groupA);
    console.log("group b -> ", groupB);

    const groupAEntropy = calculateEntropy(groupA);
    const groupBEntropy = calculateEntropy(groupB);

    const groupAWeight = groupA.length / len;
    const groupBWeight = groupB.length / len;

    const localInfoGain =
      totalEntropy -
      groupAEntropy * groupAWeight -
      groupBEntropy * groupBWeight;

    console.log("Local scope info gain -> ", localInfoGain);
    maxInfoGain = Math.max(maxInfoGain, localInfoGain);
  }

  return maxInfoGain;
}
