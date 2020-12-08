const wrap = (line, maxLen) =>  {
  if (typeof maxLen !== "number"){
    return "Pass in a number for your maxLen"
  }else{
    let result = ''
    let current = ''
    const test = line.split(' ')
    for(let i=0;i<test.length;i++){
      if(current.length<maxLen){
        current = current + ' ' +test[i] 
      }
      if(current.length >= maxLen){
        current += '\n '
        result += current
        current = ''
      }

    }
    return result
  }
}


module.exports = wrap;
