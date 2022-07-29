function best(array) {
  let high = Math.max(...array); // spread operator used
  let low = Math.min(...array); // spread operator used
  let profit = 0;
  let buySell = [];
  console.table(array);
  console.log(`low: ${low}`);
  console.log(`high: ${high}`);
  if (array[0] === Math.max(...array)) {
    console.log(`profit: 0`);
    return 0;
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element)

    for (let index2 = index + 1; index2 < array.length; index2++) {
      const element2 = array[index2];
      // console.log(`second: ${element2}`)
      if (element2 - element > profit) {
        profit = element2 - element; // will be updates as profit increases
        // profit can be used for multiple selling points, final update will be highest possible profit.
        buySell = [element, element2];
      }
    }
  }
  console.log(`buy: ${buySell[0]}, sell: ${buySell[1]}`);
  console.log(`profit: ${profit}`);
  return profit;
}
best([1, 2, 3, 4, 5]);
best([2, 3, 10, 6, 4, 8, 1]);
best([7, 9, 5, 6, 3, 2]);
best([0, 100]);

best([5, 4, 3, 2, 1]);
best([100]);
best([100, 0]);
