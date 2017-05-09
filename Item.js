
var Item = function(product) {
    this.product = product;
    this.count = 1;
    this.price = this.product.price * this.count;

};
Item.prototype.updatePrice = function() {
    this.price = this.product.price * this.count;
};
Item.prototype.toString = function ItemtoString () {
return " product id: "+this.product.id + ", product name: "+ this.product.name + ", product price: " +this.product.price + ", item count: "+ this.count+", item price: "+this.price;
};
module.exports = Item ;
