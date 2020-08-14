// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
   return newArr;
}

bouncer([7, "ate", "", false, 9]);
//return [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]);
//return []