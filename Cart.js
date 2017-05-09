var Product=require('./Product.js');
var Item=require('./Item.js');
var Cart = function() {
    this.items = [];
};

// check
Cart.prototype.productChecker = function(product) {
    if (!(product instanceof Product) || typeof product.id != 'number' || typeof product.name != 'string' || typeof product.price != 'number') {
        console.log('Please enter a valid product type');
        return false;
    } else {
      //  console.log('Product ' + product.name + ' Verified');
        return true;
    }
};
// get All items
Cart.prototype.getItems = function() {
    return this.items;
};
// get Item
Cart.prototype.getItem = function(product) {
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].product.id === product.id)
            return this.items[i];
    }
    return null;
};

// get the total of the cart price
Cart.prototype.getTotal = function() {
    var res = 0;
    for (var i = 0; i < this.items.length; i++) {
        res += this.items[i].product.price;
    }
    return res;
};

// clear the Cart

Cart.prototype.clearCart = function() {
    this.items = [];
};

// check if it has a product
Cart.prototype.hasProduct = function(product) {
    if (this.productChecker(product)) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].product.id === product.id) {
                // console.log('Product exsists in items');
                return true;
            }
        }
        //console.log('Product does not exsist');
        return false;
    } else return false;
};

// add product to item list
Cart.prototype.addItem = function(product) {
    if (this.productChecker(product)) {

        var exsists = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].product.id === product.id) {
                this.items[i].count++;
                this.items[i].updatePrice();
                //console.log('Product count incremented successfully');
                exsists = true;
                break;
            }
        }
        if (!exsists) {
            this.items.push(new Item(product));
        }
    }
};
Cart.prototype.removeItem = function(product) {
    if (this.productChecker(product)) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].product.id === product.id) {
                this.items.splice(i, 1);
              //  console.log('Product removed successfully');
            }
        }
    }
};
Cart.prototype.removeProduct = function(product) {
    if (this.productChecker(product)) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].product.id === product.id) {
                if (this.items[i].count === 1) {
                    this.items.splice(i, 1);
                  //  console.log('Product removed successfully');
                } else {
                    this.items[i].count--;
                    this.items[i].updatePrice();
                  //  console.log('Product decremented successfully');

                }
            }
        }
    }
};
Cart.prototype.toString = function CarttoString() {
  if (this.items.length ===0)
  return 'Empty Cart';
  var res = ' My Cart : \n';
for (var i = 0; i < this.items.length; i++) {
  res += this.items[i].toString()+'\n';
}
res +=' Cart Total : '+this.getTotal() + ' $';
return res ;
};

module.exports = Cart;
