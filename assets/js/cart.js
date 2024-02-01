// const btnAddToCart = document.getElementsByClassName('recipes__btn')
let cart = [];
var obj = {};


// Save cart
function saveCart() {
                                         
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    // console.log('items', JSON.stringify(cart));
}
  

 // Constructor
 function Item(id, name, price, count,image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.image = image;
}

// Add to cart
// obj.addItemToCart = function(id, name, price, count,img) {

function addItemToCart(id, name, price, img, count) {

    for(var item in cart) {
        if(cart[item].id === id) {
            cart[item].count ++;
            saveCart();
            return;
        }
    }

    var item = new Item(id, name, price, count, img);
    // console.log('item',item);
    cart.push(item);
    saveCart();
}


// btnAddToCart.addEventListener('click', () => {

$('.recipes__btn').click(function(event) {    

    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img =  $(this).data('img');
    console.log('img:',img);
    var price = Number($(this).data('price')); 
    addItemToCart(id, name, price, img, 1);
    update();
})

// update cart 
function update() {
    $('.cart__quantity').html(String(cart.length));
}

//clear all
function claer__all() {
    // cart = [];
    // sessionStorage.clear();
}

