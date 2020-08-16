// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  let sum = 0;
  let newArr = arr.sort((a,b) => a-b);

  for(let i = newArr[0]; i <= newArr[1]; i++){
    sum += i;
  }
  
  return(sum);

}

sumAll([4, 1]);
//return 10
sumAll([10, 5]);
//return 45
sumAll([1, 4]);
//return 10