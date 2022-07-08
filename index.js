function myEach(collection, callback) {

let ans = Array.isArray(collection)
let e  

if (ans == false) {

   e = Object.values(collection)

   } else {

   e = collection

   };

   e.map((e) => callback(e))

   return collection

};

function myMap(collection, callback) {

   let ans = Array.isArray(collection)
   let e  

   if (ans == false) {

   e = Object.values(collection)

   } else {

   e = collection

};

   let n = e.map((e) => callback(e))
   // console.log(e)
   // console.log(n)
   // console.log(collection)
   // console.log(n,e,collection)
   return n, e, collection

};

function myReduce(collection, callback, acc = 0) {

         // console.log(collection)
         // console.log(callback)
         // console.log(acc)

         let ans = Array.isArray(collection)
         let e  

      if (ans == false) {

         e = Object.values(collection);

      } else {

         e = collection;

      }

      const n = e.reduce((previousValue, currentValue) => previousValue + callback(acc,currentValue,e));

      // console.log(n);

      return n;

};

// const unmodifiedTestArr = [1, 2, 3, 4]
// const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
// const testArr = unmodifiedTestArr.slice() // arr is [1, 2, 3, 4]
// const testObj = Object.assign({}, unmodifiedTestObj) // obj is {one: 1, two: 2, three: 3, four: 4}
// const callback = (acc, val, collection) => (acc + (val * 3))
// reduceWithAcc = myReduce(testArr, callback, 10)
// reduceSansAcc = myReduce(testArr, callback)
// objResult = myReduce(testObj, callback)


function myFind(collection, predicate) {

      let ans = Array.isArray(collection)
      let e  

      if (ans == false) {

      e = Object.values(collection)

      } else {

      e = collection

      };

      // console.log(e)
      // console.log(predicate)
      // console.log(e.filter(predicate))

      const v = e.filter(predicate,e)

      return v[0]

};

// function findCBGenerator(target) {
//    return (function(currEl) { return target === currEl })
//  }
// const intArr = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6]
// const strArr = ["maru", "choux", "doge", "coco", "waychillgoldeneye", "trance"]
// const objB = {b: 'b'}
// const objArr = [{a: 'a'}, objB]
// myFind(intArr, findCBGenerator(4))
// myFind(strArr, findCBGenerator("waychillgoldeneye"))
// myFind(objArr, findCBGenerator(objB))



function myFilter(collection, predicate) {

   let ans = Array.isArray(collection)
   let e  

   if (ans == false) {

   e = Object.values(collection)

   } else {

   e = collection

   };

   const v = e.filter(predicate,e);

   return v

}


// function arraysEqual(arrA, arrB) {
//    if (arrA.length !== arrB.length) return false
//    for (let idx = 0; idx < arrA.length; idx++) {
//      if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
//        arraysEqual(arrA[idx], arrB[idx])
//      } else if (arrA[idx] !== arrB[idx]) {
//        return false
//      }
//    }
//    return true
//  }
 
//  function objectsEqual(objA, objB) {
//    return (JSON.stringify(objA) === JSON.stringify(objB))
//  }
 
// const testArr = [6, 11, 5, 12, 17, 100, 9, 1, -8]
// const testObj = { two: 2, three: 3, five: 5, seven: 7}
// function excluder(currEl) {
//       return (currEl > 10)
//     }

// const greaterThan10 = myFilter(testArr, excluder)
// arraysEqual(greaterThan10, [11, 12, 17, 100])

function mySize(collection) {

   let ans = Array.isArray(collection)
   let e  

   if (ans == false) {

   e = Object.values(collection)

   } else {

   e = collection

   };

   const v = Object.entries(e)

   // console.log(v.length)

   return v.length;
   
};

// const unmodifiedTestArr = [1, 2, 3, 4]
// const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
// const testArr = unmodifiedTestArr.slice()
// const testObj = Object.assign({}, unmodifiedTestObj)
// mySize(testArr)
// mySize(testObj)

function myFirst(array, n) {

   if (n !== undefined) {

      return array.slice(0,n)

      } else {

      return array[0]

   }; 

};

// const unmodifiedTestArr = [1, 2, 3, 4]
// const testArr = unmodifiedTestArr.slice()
// myFirst(testArr)
// myFirst(testArr, 3)

function myLast(array, n) {

   if (n !== undefined) {

      return array.slice(-n)

      } else {  

      return array.slice(array.length-1)[0]

   }; 

};

// const unmodifiedTestArr = [1, 2, 3, 4]
// const testArr = unmodifiedTestArr.slice()
// myLast(testArr)
// myLast(testArr, 3)

function myKeys(object) {

   return Object.keys(object)

}

function myValues(object) {

   return Object.values(object)

}