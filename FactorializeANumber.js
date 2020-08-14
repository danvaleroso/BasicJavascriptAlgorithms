function factorialize(num) {
  let newNum = 1;
  for(let i = num; i > 0; i--){
    newNum *= i; 
  }
  return newNum;
}

factorialize(5);
//return 120
  