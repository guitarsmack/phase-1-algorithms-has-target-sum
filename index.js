function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
      for (let j=i+1; j<array.length;j++){
          if (array[i] + array[j] === target){
              return true
          }
      }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n²)
  n the number of times it has to go throught the array
  n the number of times it has to go through array for each previous n
*/

/* 
  Add your pseudocode here
  for of loop array
    for of the rest of array
      add two to see if equal target
*/

/*
  Add written explanation of your solution here
  returns true if at any point they add to target. if the loops both finish then the only other option is to return false since the loop was never broken with return
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
