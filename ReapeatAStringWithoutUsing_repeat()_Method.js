function repeatStringNumTimes(str, num) {
    let newStr = "";
  
    while(num > 0){
      newStr += str;
      num--;
    }
    console.log(newStr);
    return newStr;
}
  
repeatStringNumTimes("abc", 3);
// return "abcabcabc"
repeatStringNumTimes("abc", -2);
// return ""
repeatStringNumTimes("*", 8);
// return "********"