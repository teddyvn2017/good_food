//lấy data từ session storage
function CartToHTML() {
    var items =  JSON.parse(sessionStorage.getItem("shoppingCart"));
    // console.log('items:',items);
    var total_price = 0;
    
    if (items != null) {
        items.forEach((item) => {
            
            total_price += Number(item.count)*Number(item.price);
            $('.cart__list').append(`
                <div class="cart__item">
                    <div  class="cart__item-img">
                        <img src="assets/img/${item.image}" alt="image">                        
                    </div>
                    <div class="cart__item-name">${item.name}</div>
                    <div>
                        <i class="ri-subtract-line cart__minus" data-id="${item.id}" data-price="${item.price}"></i>
                        <input type="number" id="${item.id}" class="cart__item-quantity" min = "1" value="${item.count}">
                        <i class="ri-add-line cart__plus" data-id="${item.id}" data-price="${item.price}"></i>
                    </div>
                    <div class="cart__item-totalprice${item.id}" id="${item.id}">`+ Number(item.count)*Number(item.price)+`</div>
                    <div class="cart__item-delete">
                        <a href="#" class="btn btn__delete" data-id="${item.id}">Delete</a>
                    </div>
                </div>`
            );    
        });
    }

    if (items != null) {
        $('.cart__subtotal span').html(` Sub-total: $` + total_price);
    }    
}

//hiển thị giỏ hàng từ session storage
CartToHTML();


$(document).ready(function() {

    $(document).on('click','.cart__plus',function() {     
        var id = $(this).data('id');
        var price = $(this).data('price');
    
        //lấy số lượng của item hiện tại
        var n = $('#'+id).val();
    
        //tăng lên 1
        n = parseInt(n) + 1;
    
        //gán lại giá trị mới
        $('#'+id).val(n);
    
        // cập nhật số lượng ở session storage
        update_item(id,n);
    
        //cập nhật giá
        update_total_price(id,price,n);
    
        //cập nhật lại sub total
        update_subtotal();
    });
    
    //hàm giảm số lượng món hàng
    $(document).on('click','.cart__minus',function() {  
        var id = $(this).data('id');
        var price = $(this).data('price');
        var n = $('#'+id).val();
        if (n > 1) {
            n = parseInt(n) - 1;
            $('#'+id).val(n);
        }
    
        update_item(id,n);
        update_total_price(id,price,n);
        update_subtotal();

    });
    
    //hàm tăng số lượng món hàng
    $(document).on('click','.btn__delete',function(event) {  
        event.preventDefault();
        var id = $(this).data('id');      
        delete_item(id)        
        update_subtotal();
        update_display();
    });
    
    function update_item(id,quantity) {
        
        var items =  JSON.parse(sessionStorage.getItem("shoppingCart"));      
        for (var i = 0;i < items.length;i++) {
            if (parseInt(items[i].id)==parseInt(id)) {
                items[i].count = quantity;
                // console.log('count:',items[i].count);
                sessionStorage.setItem('shoppingCart', JSON.stringify(items));
                break;
            }            
        }        
    }
    
    function delete_item(id) {
    
        console.clear();
        var items =  JSON.parse(sessionStorage.getItem("shoppingCart"));

        //tìm ra vị trí, với khóa là id trong giỏ hàng để xóa
        let index = items.findIndex(element => element.id === id);
       
        //console.log('vị trí cần xóa',index);
        items.splice(index,1);
        // console.log('item con lai',items);
        //lưu lại
        sessionStorage.setItem('shoppingCart', JSON.stringify(items));          
    }
    
    function update_total_price(id,price,quantity) {       
        var total_price = parseFloat(quantity) * parseFloat(price);       
        $('.cart__item-totalprice'+id).text(total_price.toString());
    }
    
    function update_subtotal() {
        var subtotal = 0;
        var items =  JSON.parse(sessionStorage.getItem("shoppingCart"));
        items.forEach((item) => {     
            subtotal = subtotal + parseFloat(item.count) * parseFloat(item.price);
            // console.log('subtt:',subtotal);
        });
    
        $('.cart__subtotal').text('Sub total: ' + subtotal.toString());
    }
    
    function update_display() {
        
        var items =  JSON.parse(sessionStorage.getItem("shoppingCart"));
        console.log('items:',items.length);
        var total_price = 0;
    
        if (items != null) {
            // clear html 
            $('.cart__item').remove('');
            items.forEach((item) => {
                
                total_price += Number(item.count)*Number(item.price);
                // console.log('show');
                $('.cart__list').append(`
                    <div class="cart__item">
                        <div  class="cart__item-img">
                            <img src="assets/img/${item.image}" alt="image">                        
                        </div>
                        <div class="cart__item-name">${item.name}</div>
                        <div>
                            <i class="ri-subtract-line cart__minus" data-id="${item.id}" data-price="${item.price}"></i>
                            <input type="number" id="${item.id}" class="cart__item-quantity" min = "1" value="${item.count}">
                            <i class="ri-add-line cart__plus" data-id="${item.id}" data-price="${item.price}"></i>
                        </div>
                        <div class="cart__item-totalprice${item.id}" id="${item.id}">`+ Number(item.count)*Number(item.price)+`</div>
                        <div class="cart__item-delete">
                            <a href="#" class="btn btn__delete" data-id="${item.id}">Delete</a>
                        </div>
                    </div>`
                    );    
            });
        }
        //đã xóa hết
        else {
            $('.cart__list').replaceWith('');
        }
    
        if (items != null) {
            $('.cart__subtotal span').replaceWith(` Sub-total: $` + total_price);
        } 
    
        else $('.cart__subtotal span').replaceWith(` Sub-total: $0`);
    }
});




