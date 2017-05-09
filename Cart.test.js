var assert = require('assert');
var Cart = require('./Cart.js');
var Item = require('./Item.js');
var Product = require('./Product.js');
var c = new Cart();
var product1 = new Product(1, 'product1', 3.2);
// adding to the cart a product
c.addItem(product1);
//Checking if the product is in the cart
assert.equal(c.hasProduct(product1), true, 'Product is not added correctly');
//adding the same item
c.addItem(product1);
//Get the item
assert.equal(c.getItem(product1).count, 2, 'Count is not incremented correctly');
assert.equal(c.getItem(product1).price, 6.4, 'item price in not doubled');
//remove the product
c.removeProduct(product1);
//check the count
assert.equal(c.getItem(product1).count, 1, 'Count is not decremented correctly');
assert.equal(c.getItem(product1).price, 3.2, 'item price is not halfed ');
// adding product 2
var product2 = new Product(2, 'product2', 5);
c.addItem(product2);
assert.equal(c.items.length, 2, 'The number of items is not updated correctly');
// getTotal
console.log('Cart Total : ' + c.getTotal() + ' $');
//print the cart before clearing
console.log(c.toString());
// clear the cart
c.clearCart();
// check on Cart
assert.equal(c.items.length, 0, 'The cart is not cleared correctly');
