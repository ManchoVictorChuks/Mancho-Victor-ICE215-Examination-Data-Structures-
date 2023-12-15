let arr = [
  11,  3,  6,
  9,   5,   8,
  10,  7, -12,
]

function arrDiagonalDifference(arr) {
  let n = 0;
  let leftdiagonal = (arr[n] + arr [n + 4] + arr[n + 8])

  let m = 2
  let rightdiagonal = (arr[m] + arr[m + 2] + arr[m+4])

  console.log(leftdiagonal - rightdiagonal);
  
}


arrDiagonalDifference(arr)