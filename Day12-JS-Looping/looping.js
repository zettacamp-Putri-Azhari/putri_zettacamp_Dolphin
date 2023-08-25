// Update your book purchasing function to have parameter amount of stock & amount of purchased book.
// Then calculate total price & display the result.

// Note:
// The function must have at least:
// for loop iteration
// break when amount of book is already out of stock
// Display text if amount of book after purchasing can be purchased again or not

let shoppingBags = true;
const discount = 10;
const tax = 8;

const stock = { nameBooks: 'Amorfati', priceBooks: 54000, stok: 0 };
let purchasedAmount = 0;

function purchaseBookDetails(stock, discount, tax, purchasedAmount) {
  const stockBooks = stock.stok;
  let sisa = 0;

  for (let i = 1; i <= stockBooks; i++) {
    if (i == stockBooks) {
      console.log('sold');
    } else if (purchasedAmount == i) {
      sisa = stockBooks - i;
      break;
    }
  }

  const price = stock.priceBooks;
  const subTotal = price * purchasedAmount;
  const discountAmount = (price * discount) / 100;
  const discountedPrice = subTotal - discountAmount;
  const taxAmount = (discountedPrice * tax) / 100;
  const total = discountedPrice + taxAmount;

  console.log('Purchasing Details for   : ' + stock.nameBooks);
  console.log('Price                    : ' + stock.priceBooks);
  console.log('Purchase Amount          : ' + purchasedAmount);
  console.log('Subtotal                 : ' + subTotal);
  console.log('Discount                 : ' + discountAmount);
  console.log('After Discount           : ' + discountedPrice);
  console.log('Tax                      : ' + taxAmount);
  console.log('After Tax                : ' + total);
  console.log('Stock Available          :', sisa <= purchasedAmount ? 'Not Available' : 'Available');
  console.log('Add Shooping Bags ?', shoppingBags ? 'Yes' : 'No');
}

purchaseBookDetails(stock, discount, tax, purchasedAmount);
