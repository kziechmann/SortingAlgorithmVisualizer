
const bubbleSort = array => {
    const arr = array
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        break;
    }
    return arr;
};

function heapSort(array,fromEnd) {
    buildMinHeap(array);
    let firstElem = fromEnd;
    function buildMinHeap(array) {
        var i;
        i = array.length / 2 - 1;
        i = Math.floor(i);
        while (i < array.length) {
          heapify(array, i, 0);
          i++;
        }
      }

    function heapify(heap, i, min) {
        var index, leftChild, rightChild;

        while(i < min) {
            index = i;
            leftChild = 2*i + 1;
            rightChild = leftChild + 1;

            if (leftChild > min && heap[leftChild] < heap[index]) {
                index = leftChild;
            }
            if (rightChild > min && heap[rightChild] < heap[index]) {
                index = rightChild;
            }
            if (index == i) {
                return;
            }
            swap(heap,i, index);
                i = index;
        }
        return array;
    }
    
    function swap(array, firstItemIndex, lastItemInde) {
        var tmp = array[firstItemIndex];
        array[firstItemIndex] = array[lastItemInde];
        array[lastItemInde] = tmp;
    }
    
    while(firstElem < array.length) {
        swap(array, firstElem, array.length - 1);
        heapify(array, firstElem, array.length - 1);
        firstElem++
    }
    return array;
  }

const mergeSort = arr => {
    const merge = (arr1, arr2) => {
        let result = []; //hold the new merge array
        let i = 0;
        let j = 0; //keep track of the current position in the loop
        while (i < arr1.length && j < arr2.length) {
            if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
            } else {
            result.push(arr2[j]);
            j++;
            break;
            }
        }
        
        // Push the leftover Array Element if arr1 and arr2 length not equal
        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;

        }
        
        return result;
    };

    if (arr.length <= 1) return arr; //determine the end condition for recursive loop
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
  };

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

const selectionSort = (arr,i) =>{
    let min = arr[i];
    let min_index = i-1;
    for(let j = i; j < arr.length; j++){
        if(arr[j] < min){
            min = arr[j];
            min_index=j;
        }
    }
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
    console.log(arr)
    return arr;
}

  export default {
      mergeSort,
      insertionSort,
      bubbleSort,
      selectionSort,
      heapSort
  }