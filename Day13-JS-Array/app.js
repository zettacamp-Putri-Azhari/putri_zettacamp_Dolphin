// Update your book purchasing function to add parameter for the total duration of credit
// (indicating the credit term length in months) and calculate the due date for each month
// Starting from the next month when you work on this code using array function in javascript and display the results
// as an array of strings.

const stock = [
  { nameBook: 'Amorfati', priceBook: 54000, stok: 5, credit: 3 },
  { nameBook: 'Kala', priceBook: 60000, stok: 3, credit: 0 },
];

function purchaseBookDetails(nameBook, priceBook, stok, discount, tax, purchasedAmount, taxCredit, credit) {
  const stockBook = stok;
  const price = priceBook;
  const subTotal = price * purchasedAmount;
  const discountAmount = (price * discount) / 100;
  const discountedPrice = subTotal - discountAmount;
  const taxAmount = (discountedPrice * tax) / 100;
  const total = discountedPrice + taxAmount;
  // stock
  sisa = stockBook - purchasedAmount;
  // credit
  const totalCredit = (total * taxCredit) / 100;
  const bayarBulanan = totalCredit / credit;

  stock.push({
    nameBook: 'Duduk Dulu',
    priceBook: 54000,
    stok: 1,
    credit: 0,
  });
  console.log('Daftar Buku : ', stock);

  console.log();
  console.log('Purchasing Details for    ');
  console.log('Name Book                : ' + nameBook);
  console.log('Price                    : ' + priceBook);
  console.log('Purchase Amount          : ' + purchasedAmount);
  console.log('Subtotal                 : ' + subTotal);
  console.log('Discount                 : ' + discountAmount);
  console.log('After Discount           : ' + discountedPrice);
  console.log('Tax                      : ' + taxAmount);
  console.log('After Tax                : ' + total);
  console.log();

  console.log('Stock Available          : ', sisa == 0 ? 'Stok Habis' : +sisa);
  for (let i = 0; i <= stockBook; i++) {
    if (i >= sisa || purchasedAmount >= stockBook) {
      console.log('Stok yang anda inginkan tidak mencukupi');
      break;
    } else if (i <= sisa || purchasedAmount <= stockBook) {
      console.log('Kamu Dapat Membeli buku');
      break;
    }
  }

  console.log();
  //   console.log('Add Shooping Bags ?', shoppingBags ? 'Yes' : 'No');
  const date = new Date();
  console.log('Pembayaran : ', credit != 0 ? 'Credit ' + totalCredit : 'Lunas');
  const arrayToString = [];
  for (let i = 0; i <= credit; i++) {
    date.setDate(date.getDate() + 30);
    if (i < credit) {
      let bulan = `Bulan  : ${date.toDateString()}, Cicilan :  ${bayarBulanan}`;
      arrayToString.push(bulan);
      // console.log(i + 1);
      // console.log('Bulan         : ' + date.toDateString());
      // console.log('Pembayaran    : ' + bayarBulanan);
      // console.log('Pembayaran    : ' + Math.round(bayarBulanan));
    }
  }
  console.log(arrayToString);
}
purchaseBookDetails(stock[0].nameBook, stock[0].priceBook, stock[0].stok, 10, 8, 3, 2, stock[0].credit);
