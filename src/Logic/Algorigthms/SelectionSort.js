const selectionSort = (arr,i) =>{
    if(i >= arr.length-1) return arr;
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
    return arr;
}

export default selectionSort;