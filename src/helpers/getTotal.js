function getTotal(price, duration) {
  
  let result;
  if(duration / 60 < 1){
    result = price * 0.5;
  }else{
    result = price * Math.floor(duration/60);
    if(duration % 60 >= 30){
      result += price * 0.5;
    }
  }
  
  return result;
}

export default getTotal;