// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    let regex = /[\w\s]/g;
    let arr = str.match(regex);
    let newStr = "";
    for (let i = arr.length - 1; i > -1; i--){
      newStr += arr[i];
    }
    str = newStr;
    return str;
  }
  
  reverseString("hello");
  //return "olleh"