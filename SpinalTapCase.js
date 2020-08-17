//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let regex = /\s|_|(?=[A-Z])/;
  let newStr = str.split(regex).join("-").toLowerCase();
  console.log(newStr);
  return newStr;
}

spinalCase('This Is Spinal Tap');
// return this-is-spinal-tap
spinalCase("AllThe-small Things");
// return all-the-small-things