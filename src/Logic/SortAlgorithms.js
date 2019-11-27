const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      let change = false;
      for (let j = 0; j < arr.length - (i + 1); j++) {
        if (arr[j] > arr[j + 1]) {
          change = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      if (!change) break;
    }
    return arr;
  };

const heapSort = (input) => { 
    const maxHeap = (input, c) => {
        const right = 2 * i + 2
        const left = 2 * i + 1
        let maximum = c
    
        if ((left < arrLength) && (input[left] > input[maximum])) {
            maximum = left
        }
    
        if ((right < arrLength) && (input[right] > input[maximum]))     {
            maximum = right
        }
    
        if (maximum != c) {
            swap(input, c, maximum)
            maxHeap(input, maximum)
        }
    }
    
    const swap = (input, indexA, indexB) => {
        const i = input[indexA]
    
        input[indexA] = input[indexB]
        input[indexB] = i
    }
    
    arrLength = input.length

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
        maxHeap(input, i)
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i)
        arrLength--

        maxHeap(input, 0)
    }
    return
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
            result.push[arr2[j]];
            j++;
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

  function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let e = arr[i];
      let j;
  
      for (j = i - 1; j >= 0 && arr[j] > e; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = e;
    }
    return arr;
  };

  function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=arr[i];
        let min_index=i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<min){
                min=arr[j];
                min_index=j;
            }
        }
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const quickSort = (arr, left, right) =>{
    const swap = (arr, left, right) =>{
        let temp   = arr[left];
        arr[left]  = items[right];
        arr[right] = temp;
      }
      
    // function to do partition added 
    const partition = (arr, left, right) =>{
    // get the pivot
    let pivot = arr[Math.floor((right + left) / 2)],
    // pointer to the left  
    i = left,
    // pointer to the right                              
    j = right;
    while (i <= j) {
        while (arr[j] > pivot) {
            j--;
        }
        while (arr[i] < pivot) {
            i++;
        }
        if (i <= j) {
            // swap the 2 elements to get them in order
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
    }

     pivot,
     partitionIndex;
  
    if(left < right){
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      
     //sort left and right
     quickSort(arr, left, partitionIndex - 1);
     quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }

  export default {
      mergeSort,
      insertionSort,
      quickSort,
      bubbleSort,
      selectionSort,
      heapSort
  }