// Question 3. Arrange the array of
// objects in such a way that the category
// becomes the key of objects and all the related objects are stored as the value in it.

// // Input:
// let products = [
//   { name: "Apple", category: "fruit" },
//   { name: "Carrot", category: "vegetable" },
//   { name: "Orange", category: "fruit" },
//   { name: "Banana", category: "fruit" },
//   { name: "Tomatoes", category: "vegetable" },
//   { name: "Broccoli", category: "vegetable" },
//   { name: "iPhone", category: "Mobile" },
// ];
// Output:
//  products = {
//     fruit:[
// { name: "Apple", category: "fruit" },
// { name: "Orange", category: "fruit" },
// { name: "Banana", category: "fruit" }
// ],
//   vegetable:[
// { name: "Carrot", category: "vegetable" },
// { name: "Tomatoes", category: "vegetable" },
//     	{ name: "Broccoli", category: "vegetable" },
// ]
// }

let demo = (list) => {
  let finalObj = {};
  for (let obj of list) {
    if (finalObj[obj.category]) {
      finalObj[obj.category].push(obj);
    } else {
      finalObj[obj.category] = [];
      finalObj[obj.category].push(obj);
    }
  }

  return finalObj;
};

let result = demo(products);

console.log(result);

let groupedProducts = products.reduce((acc, product) => {
  // If the category is not in the accumulator, create an empty array
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  // Add the current product to the corresponding category array
  acc[product.category].push(product);
  return acc;
}, {});

console.log(groupedProducts);
