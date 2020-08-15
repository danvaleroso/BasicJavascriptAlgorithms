// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let arr = [];
  let regex = /\w/;
  let count = 0;

  for(let i = 0; i < str.length; i++){
    if(regex.test(str[i])){
      arr.push(str[i]);
      if(arr.length > count){
        count = arr.length;
        console.log(count);
      }
    } else {
      arr = [];
    }
  }
  return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Return 6