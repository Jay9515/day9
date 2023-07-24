function zeroesToEnd(arr) {
    let nonZeroIndex = 0;
  
   
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex++] = arr[i];
      }
    }
  

    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
 
  console.log(zeroesToEnd([8, 2, 0, 4, 0, 6])); 
  console.log(zeroesToEnd([1, 8, 0, 2, 0, 5])); 
  console.log(zeroesToEnd([9, 0, 5, 1,7])); // 
  console.log(zeroesToEnd([0, 0, 1, 0, 2,1 ])); 
  