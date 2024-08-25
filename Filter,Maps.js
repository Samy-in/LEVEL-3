// Little example of Arrow function
// const sum = (a,b) => {
//   return a + b;
// }

// **** Evenever we have to transform array we use map which is under array form.

// Learning Fliter, mapping by examples
// Q) return array which is [2,3,4,5] is multiplied by 2 
// by normal method
// const Array = [2,3,4,5];
// const newArray = [];
// for(let i= 0; i < Array.length; i++){
//   newArray.push(Array[i] * 2);
// }
// console.log(newArray); this gives [4,6,8,10]

//but we can make this in maps

// Maps basically needs an input array and a transformation function where the logical code is written.
// Ex = input = [2,2,4,5]

// function MainProcess(a){
  // return a*4;
// } then we can use map to merge this both input and the process function.
// map(input , Mainprocess);
 
// So we write the above Question with map as:

// const input = [2,3,4,5];
// function transform (i){
//   return i * 2;        this gives the same ans [4,6,8,10]
// }
// const NewAns = input.map(transform);
// console.log(NewAns);


// **************** Filtering ***************************
// Give an array which has even number from the given array values.
// By normal way.
// const input = [2,3,4,5]
// const arr = [];
// for( let i = 0; i < input.length; i++){
//      if (input[i] % 2 == 0){
//             arr.push(input[i]);
//        }
//  }
//      console.log(arr);
//
//          By filtering logic
//  where we again make a separate logic in a function and use it
//  function FilteringLogic (n) {
//      if(n % 2 == 0) {
//          return true;
//  } else {
//  return false;
//  }
//  const ans = arr.filter(FilteringLogic);
//  console.log(ans);    -------------------   Most efficient code.

// -------------------we can also write in more like callback types.

//  const ans = arr.filter( function FilteringLogic (n) {
//      if(n % 2 == 0) {
//          return true;
//  } else {
//  return false;
//  });
//  console.log(ans); 