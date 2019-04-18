// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      let left = arr[i];
      let right = arr[i + 1];

      if (left > right) {
        arr[i] = right;
        arr[i + 1] = left;
        sorted = false;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let current = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = current;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length/2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  results = [...results, ...left, ...right];
  return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
