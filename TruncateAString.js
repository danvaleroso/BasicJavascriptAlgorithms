function truncateString(str, num) {
  let newStr = "";

  if(str.length > num){
    for(let i = 0; i < num; i++){
      newStr += str[i];
    }
    return newStr += "...";
  } else {
    return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
//return "A-tisket..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
//return "A-tisket a-tasket A green and yellow basket"