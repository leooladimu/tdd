const 

function myMap(inputArray, callback) {
  let newArr = [];
  for (ele of inputArray) {
    let res = cb(ele);
    newArr.push(res);
  }
  
  return newArr;
}

module.exports = myMap;