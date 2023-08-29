const stock = [
  { nameBook: 'Amorfati', priceBook: 54000, stok: 5, credit: 3 },
  { nameBook: 'Kala', priceBook: 60000, stok: 3, credit: 0 },
];

function purchaseBookDetails(nameBook, priceBook, stok, discount, tax, purchasedAmount, taxCredit, credit) {
  const stockBook = stok;
  const price = priceBook;
  const subTotal = price * purchasedAmount;
  const bayarBulanan = subTotal / credit;
  const discountAmount = (price * discount) / 100;
  const discountedPrice = subTotal - discountAmount;
  const taxAmount = (discountedPrice * tax) / 100;
  const total = discountedPrice + taxAmount;
  // stock
  sisa = stockBook - purchasedAmount;
  // credit
  //   const totalCredit = (total * taxCredit) / 100;
  //   const bayarBulanan = totalCredit / credit;

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
  console.log('Pembayaran : ', credit != 0 ? 'Credit ' : 'Lunas');
  const date = new Date();
  const arrayCicilan = [];
  for (let i = 0; i <= credit; i++) {
    date.setDate(date.getDate() + 30);
    if (i < credit) {
      let tanggal = date.toDateString();
      let pembayaran = bayarBulanan;
      arrayCicilan.push({ tanggal, pembayaran });
    }
  }
  console.log(arrayCicilan);
  const totalCredit = arrayCicilan.reduce((cicilan, credit) => cicilan + credit.pembayaran, 0);
  console.log('Total Pembayaran:  ', totalCredit);
  console.log();
}
purchaseBookDetails(stock[0].nameBook, stock[0].priceBook, stock[0].stok, 10, 8, 3, 2, stock[0].credit);
