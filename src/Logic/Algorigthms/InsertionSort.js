const insertionSort = (inputArr, i) => {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
        inputArr[j + 1] = inputArr[j];
        j = j - 1;
    }
    inputArr[j + 1] = key;
    return inputArr;
  };

export default insertionSort;