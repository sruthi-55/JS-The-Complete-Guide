console.log('sru'.toUpperCase());
console.log('sru'.startsWith('s'));

//##### Tagged templates
// a fn that works along with a template literal

function productDescription(strings, productName, productPrice) {
  console.log(strings);       // takes all string parts b/w dynamic segments
  console.log(productName);     // rest dynamic segments are passed as additional args in the same order
  console.log(productPrice);

  // let priceCategory = 'pretty cheap regarding its price';
  // if (productPrice > 20) {
  //   priceCategory = 'fairly priced';
  // }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
  //   strings[2]
  // }`;
  // return {name: productName, price: productPrice};
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;    // Tagged template
console.log(productOutput);