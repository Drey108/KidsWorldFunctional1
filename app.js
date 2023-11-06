var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 5,
    cents: 19,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 10,
    cents: 79,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 2,
    cents: 9,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 1999,
    cents: 29,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 5,
    cents: 39,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 50,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 60,
    cents: 0,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 1,
    cents: 99,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 2,
    cents: 10,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 5,
    cents: 50,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 20,
    cents: 0,
  },
];

function updateCart() {
  let cart = 0;
  for (index = 0; index < items.length; index++) {
    cart = cart + items[index].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    updateCart();
  };
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
  let totalPriceInCents = 0;

  for (index = 0; index < items.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}