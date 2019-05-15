// 5 URLIFY a string

// function URLify(text) {
//   text = text.replace(" ", "%20");
//   return console.log(text);
// }

// URLify("tauhida parveen");

// 6

function filterMe(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
}

filterMe([1, 2, 3, 5, 6, 6, 7]);
