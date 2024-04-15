function insertionSort(arr) {
    // Loop through each element in the array
    for (let i = 1; i < arr.length; i++) {

      let j;

      const currentElement = arr[i];
  
      // Loop backwards through the sorted sequence from i-1 to 0
      for (j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
        arr[j + 1] = arr[j];
      }
  
      // Insert the current element at the correct position in the sorted sequence
      arr[j + 1] = currentElement;
    }
  
    return arr;
}
  

console.log(insertionSort([5, 3, 8, 4, 6])); 
console.log(insertionSort([5, 8, 3, 6, 4])); 
