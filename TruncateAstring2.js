function truncateString(str, num) {
    return str.length > num? str.slice(0, num).concat("...") : str;
}
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);
//return "A-tisket..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
//return "A-tisket a-tasket A green and yellow basket"