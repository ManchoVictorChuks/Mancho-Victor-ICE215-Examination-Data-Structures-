var num = [];

for(var i = 1; i < 101; i++){
  num.push(i)
}

console.log(num);

var even = [];

for(var i = 1; i < num.length; i+=2){
  even.push(num[i])
}

console.log(even);