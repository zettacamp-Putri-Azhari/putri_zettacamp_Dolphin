// TASK
// Form variable JavaScript day 1
// Use comparison operator with 2 variables from task number 1, display true if the name of books have same name
// otherwise display false

// Create new 2 variables to contain price of your favourite books

let nameBooks = {
  favouriteBook: 'Amorfati',
  leastFavouriteBook: 'Kala',
};

let priceBooks = {
  favouriteBook: 500000,
  leastFavouriteBook: 300000,
};

// Find the average price from those 2 variables using arithmetic operator
subTotal = priceBooks.favouriteBook + priceBooks.leastFavouriteBook;
averagePrice = subTotal / 2;

console.log();
console.log(nameBooks.favouriteBook);
console.log(nameBooks.leastFavouriteBook);
console.log(nameBooks.favouriteBook == nameBooks.leastFavouriteBook);
console.log();

// Compare the variables which one have the highest price
console.log(priceBooks.favouriteBook > priceBooks.leastFavouriteBook ? nameBooks.favouriteBook : nameBooks.leastFavouriteBook);
console.log();

console.log('-----------------------Name Books-----------------------');
console.log(nameBooks);

console.log('-----------------------Price Books-----------------------');
console.log(priceBooks);

console.log('Sub Total     : ' + subTotal);
console.log('Average Price : ' + averagePrice);

// Create new variable to use ternary operator to determine the value of variable,
// if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”
console.log(averagePrice > 500000 ? 'Expensive' : 'Cheap');
console.log();
