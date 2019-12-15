function swap(array, firstItemIndex, lastItemInde) {
    var tmp = array[firstItemIndex];
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
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
        if (index === i) {
            return;
        }
        swap(heap,i, index);
            i = index;
    }
}

function buildMinHeap(array) {
    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);
    while (i < array.length) {
      heapify(array, i, 0);
      i++;
    }
  }

function heapSort(array,fromEnd) {
    buildMinHeap(array);
    let firstElem = fromEnd;

    while(firstElem < array.length) {
        swap(array, firstElem, array.length - 1);
        heapify(array, firstElem, array.length - 1);
        firstElem++
    }
    return array;
  }

export default heapSort;