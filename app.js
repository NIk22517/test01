const Products = [];

let basePrice;
let couponDiscount; //915
let subTotal;
let taxAmount;
const couponDiscountPercentage = 10;
const taxRate = 18;
const grandTotal = 1079;

const tax = grandTotal / (taxRate / 100 + 1);
taxAmount = grandTotal - tax;

basePrice = Math.abs(tax / (couponDiscountPercentage / 100 - 1));
couponDiscount = basePrice - tax;
Products.push({
  basePrice: basePrice,
  couponDiscount: couponDiscount,
  subTotal: tax,
  taxAmount: taxAmount,
  couponDiscountPercentage: couponDiscountPercentage,
  taxRate: taxRate,
  grandTotal: grandTotal,
});

console.log(Products);
