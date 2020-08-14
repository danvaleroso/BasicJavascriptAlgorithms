function titleCase(str) {
  let arr = [];
  let newStr = "";
  let newArr = [];

  arr = str.split(" ")

  for(let i = 0; i < arr.length; i++){
    let wordStr = '';
    wordStr += arr[i][0].toUpperCase()
    for(let j = 1; j <arr[i].length; j++){
      wordStr += arr[i][j].toLowerCase();
    }
    newArr.push(wordStr);
  }
  newStr = newArr.join(" ");
  console.log(newStr);
  return newStr;
}

titleCase("I'm a little tea pot");
//return "I'm A Little Tea Pot"