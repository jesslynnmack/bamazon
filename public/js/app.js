

    let cartTotal = 0;
    //empty array to hold cart items
    const cartList = [];

    //call to api
    //$.get('/api/products').then(function(response){
    //    console.log(response);
    //    response.forEach(function(element){
    //        cartList.push(element)
    //    })
    //})



    const addQuantity = function () {
        $('.modal-body').empty();
       for(var i = 0; i < cartList.length; i ++) {
         $(".modal-body").append(`<h3>${cartList[i].name} (${cartList[i].quantity})</h3>`);
       }
       
    }

    $(".checkoutBtn").click(addQuantity);

    $(".addCart").on('click', function(){

        let itemId = $(this).attr('data-id');
        let productName = $(this).attr('data-product');
        let quantity = $('#'+productName).val();

        let product = {
            id: itemId,
            name: productName,
            quantity: quantity
        }

        cartList.push(product);

    });




