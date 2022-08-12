$(document).ready(function () {
    if(localStorage.getItem("cateId")){
    var cateId = localStorage.getItem("cateId");
}
else if(localStorage.getItem("search")){
    var search = localStorage.getItem("search");
}
    // localStorage()
    else{
        var gender = localStorage.getItem("gender");
    }
    var count = 0;
    var carts = [];
    var carts = JSON.parse(localStorage.getItem("carts"));

    $.getJSON("../data/product.JSON", function (data, textStatus, jqXHR) {
        $($('<div class="item-cat-prod row"></div>')).appendTo($("list-prod"));
        $.each(data, function (indexInArray, valueOfElement) {
            let carted = false
            if(search?data[indexInArray].title.toLowerCase().includes(search.toLowerCase()):(cateId||gender?(cateId?data[indexInArray].id_sub_category == cateId:data[indexInArray].gender == gender):true) ){
                if(carts){
                carts.forEach(cart => {
                    if(cart == data[indexInArray].id){
                        carted = true;
                    }
                });}
                let c = `
                <div class="product">
                <div class="thumb-product">
                    
                        <img src="../img/product_img/`+ data[indexInArray].id_category + '/' + data[indexInArray].id_sub_category + '/' + data[indexInArray].id + `/1.jpg" onclick="goToProd(`+(data[indexInArray].id-1)+`)"alt="">
                    
                </div>
                <div class="info-product">
                    <div class="list-color" style="background-color: `+data[indexInArray].color+`">
                    </div>
                    <h3 class="title-product" onclick="goToProd(`+data[indexInArray].id+`)">`+ data[indexInArray].title + `</h3>
                    <div class="price-product">
                        <ins>
                        
                        <span><strike>$`+(data[indexInArray].price.replace("$", ""))*2+`</strike></span>
                            <span>`+ data[indexInArray].price + `</span>
                        </ins>
                    </div>
                </div>
                <div class="">
                    <span>
                        <button class="btn-cart add-to-cart `+(carted?"disable":"")+`" onclick="addToCart(`+data[indexInArray].id+`, this)"><i class="fa-solid fa-cart-arrow-down fa-lg"></i></button>
                    </span>
                </div>
            </div>`
            if (count % 4 == 0) {
                $($('<div class="item-cat-prod row"></div>')).appendTo($(".list-prod"));
            }

            $(c).appendTo($(".item-cat-prod")[Math.floor(count / 4)]);
            
            count += 1;
            }
            
        });
    }
    );
});
function goToProd(id){
        localStorage.setItem("p_id", id);
        window.location.href = "../product_detail/product_detail.html";
}

