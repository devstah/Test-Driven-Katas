const wrap = (line, maxLen) =>  {
  if (typeof maxLen !== "number"){
    return "Pass in a number for your maxLen"
  }else{
    return line;
  }
}


module.exports = wrap;
