// Factory fns - a function that produces another fn

// This is a factory fn
function createTaxCalculator(tax){
  function calculateTax(amount){
    return tax * amount;
  }
  return calculateTax;      // returns a fn
}

const calVatAmt = createTaxCalculator(0.19);
const calIncTaxAmt = createTaxCalculator(0.25);

console.log(calVatAmt(105));
console.log(calIncTaxAmt(236));