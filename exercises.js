// 5 URLIFY a string

// function URLify(text) {
//   text = text.replace(" ", "%20");
//   return console.log(text);
// }

// URLify("tauhida parveen");

// 6

// function filterMe(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       newArr.push(arr[i]);
//     }
//   }
//   return console.log(newArr);
// }

// filterMe([1, 2, 3, 5, 6, 6, 7]);


// function sumArr(arr){
//   let newArr = [];
//   let length = arr.length;
//   let arrSum = 0;
//   for (let j = 0; j < length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       arrSum += arr[i];
//       newArr.push(arrSum);
//     }
//     arrSum = 0;
//     arr.shift()
//   }
  
//   console.log(Math.max(...newArr)); // 12
// }

// sumArr([4, 6, -3, 5, -2, 1])

// 8 Merge arrays
// function mergeAndSort(arr1, arr2) {
//   arr1 = arr1.concat(arr2);
//   arr1 = arr1.sort((a, b) => {
//     return a - b;
//   });

//   console.log(arr1)
// }

// mergeAndSort([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);



// 9 Remove characters
// function removeChar(str, characters){
//   characters = characters.split('');
//   for (let i = 0; i < characters.length; i ++) {
//     let regex = new RegExp(characters[i], 'g')
//     str = str.replace(regex, '');
//   }
//   console.log(str);
// }

// removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');


// 10 Products
function products(arr){
  let numProduct = 1;
  let newArr = [];
  
  for (let i = 0; i < arr.length; i ++) {
   let productArray = []; 
   productArray.push(arr);
    
    productArray.splice(i, 1);
    console.log(productArray)
    numProduct = 1;
    for (let j = 0; j < productArray.length; j ++) {
  
      (numProduct *= productArray[j]);
      newArr.push(numProduct);
    }
  } 

  console.log(newArr);
}

products([1, 3, 9, 4]);