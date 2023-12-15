const data = [1,3,5,6,"hello", "guava", "hello world", 34,56 ,54]
  const numberArry = [453,656,67645,5476,798,5678,989,34545,6465768,79,76545364,75,8789,987,64765,]


// 3.I

console.log(numberArry.sort(function(a, b){
  return a - b;
}));

console.log(data.sort(function(a, b){
  return a - b;
}));

//3.II

data.forEach(function(element){
  console.log(element)
})

numberArry.forEach(function(element){
  console.log(element)
})

//3.III

const reducer = (accumulator, value) => accumulator + value;

console.log("total of array = " + numberArry.reduce(reducer));

//3.IV

numberArry.push(77)

console.log(numberArry)