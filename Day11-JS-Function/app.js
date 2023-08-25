// TASK
// Try create a book purchasing function that has parameters detail of a book,
// percentage of the discount, percentage of tax. Then display all the parameters with additional data:
// Amount of discount
// Price after discount
// Amount of tax
// Price after tax

const nameBooks = 'Amorfati';
const priceBooks = 54000;
let shoppingBags = true;
const discount = 10;
const tax = 8;

function purchaseBookDetails(nameBooks, priceBooks, discount, tax) {
  const price = priceBooks;
  const discountAmount = (price * discount) / 100;
  const discountedPrice = price - discountAmount;
  const taxAmount = (discountedPrice * tax) / 100;
  const total = discountedPrice + taxAmount;

  console.log('Purchasing Details for   : ' + nameBooks);
  console.log('Price                    : ' + priceBooks);
  console.log('Discount                 : ' + discountAmount);
  console.log('After Discount           : ' + discountedPrice);
  console.log('Tax                      : ' + taxAmount);
  console.log('After Tax                : ' + total);
  console.log('Add Shooping Bags ?', shoppingBags ? 'Yes' : 'No');
}

purchaseBookDetails(nameBooks, priceBooks, discount, tax);

// Note:
// The function must have at least:
// Constant variable
// Boolean, number, string variable
// Assignment, addition, addition, subtraction, multiplication, division operator
