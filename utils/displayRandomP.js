
$(document).ready(function () {
   
    var carts = [];
    var carts = JSON.parse(localStorage.getItem("carts"));

    $.getJSON("../data/product.JSON", function (data, textStatus, jqXHR) {
        $($('<div class="item-cat-prod row"></div>')).appendTo($("#prod-rand"));
        var randP = [];
        for (i = 0; i < 5; i++) {
            let rand = Math.ceil(Math.random() * data.length)
            let check = true;
            console.log(rand)
            console.log(i)
            if (randP.length != 0) {
                randP.forEach(element => {
    
                    if (rand == element) {
                        i--;
                        check = false;
                        rand = Math.ceil(Math.random() * 21)
                    }
    
                });
            }
            if (check || randP.length == 0) {
                randP.push(rand);
            }
        }
        console.log(randP)
        $.each(data, function (indexInArray, valueOfElement) {
            let carted = false
            randP.forEach(rand => {

                if (data[indexInArray].id == rand) {
                    if (carts) {
                        carts.forEach(cart => {
                            if (cart == data[indexInArray].id) {
                                carted = true;
                            }
                        });
                    } var ordered = JSON.parse(localStorage.getItem("ordered"))
                    var check = true;
                    ordered.forEach(element => {
                        if (data[indexInArray].id == element) {
                            check = false;
                        }

                    });
                    let c = `
                <div class="product">
                <div class="thumb-product">
                    
                        <img src="../img/product_img/`+ (data[indexInArray].id_category) + '/' + data[indexInArray].id_sub_category + '/' + data[indexInArray].id + `/1.jpg" onclick="goToProd(` + (data[indexInArray].id-1) + `)"alt="">
                    
                </div>
                <div class="info-product">
                    <div class="list-color" style="background-color: `+ data[indexInArray].color + `">
                    </div>
                    <h3 class="title-product" onclick="goToProd(`+ (data[indexInArray].id-1) + `)">` + data[indexInArray].title + `</h3>
                    <div class="price-product">
                        <ins>
                        
                        <span><strike>$`+ (data[indexInArray].price.replace("$", "")) * 2 + `</strike></span>
                            <span>`+ data[indexInArray].price + `</span>
                        </ins>
                    </div>
                </div>
                <div class="">
                    <span>
                    <button class="btn-cart add-to-cart `+ (carted || !check? "disable" : "") + `" ` + (carted || !check? "disabled" : "") + ` onclick="addToCart(` + data[indexInArray].id + `, this)"><i class="fa-solid fa-cart-arrow-down fa-lg"></i></button>
                    </span>
                </div>
            </div>`

                    $(c).appendTo($(".item-cat-prod"));

                }


            });
        });
    }
    );
});