$(document).ready(function () {
    if (localStorage.getItem("cateId")) {
        var cateId = localStorage.getItem("cateId");
    }
    else if (localStorage.getItem("search")) {
        var search = localStorage.getItem("search");
    }
    // localStorage()
    else {
        var gender = localStorage.getItem("gender");
    }
    var count = 0;
    var carts = [];
    var carts = JSON.parse(localStorage.getItem("carts"));
    var products = [];
    var countP = 0;
    $.getJSON("../data/product.JSON", function (data, textStatus, jqXHR) {
        var limit = 12;
        var numPage = Math.ceil(data.length / limit);
if (localStorage.getItem("page")) {
            var curPage = localStorage.getItem("page")
        }
        else {
            localStorage.setItem("page", 0)
            var curPage = 0
        }
        $($('<div class="item-cat-prod row"></div>')).appendTo($("list-prod"));
        $.each(data, function (indexInArray, valueOfElement) {

            if (search ? data[indexInArray].title.toLowerCase().includes(search.toLowerCase()) : (cateId || gender ? (cateId ? data[indexInArray].id_sub_category == cateId : data[indexInArray].gender == gender) : true)) {


                products.push(indexInArray)
                return products
            }

        });
        console.log(products)
        
        $.each(products, function (indexInArray, valueOfElement) {

            if (indexInArray < (parseInt(curPage) + 1) * limit && indexInArray >= (parseInt(curPage) * limit)) {

                let carted = false
                if (carts) {
                    carts.forEach(cart => {
                        if (cart == data[products[indexInArray]].id) {
                            carted = true;
                        }
                    });
                }
                let c = `
        <div class="product">
        <div class="thumb-product">
            
                <img src="../img/product_img/`+ data[products[indexInArray]].id_category + '/' + data[products[indexInArray]].id_sub_category + '/' + data[products[indexInArray]].id + `/1.jpg" onclick="goToProd(` + (data[products[indexInArray]].id - 1) + `)"alt="">
            
        </div>
        <div class="info-product">
            <div class="list-color" style="background-color: `+ data[products[indexInArray]].color + `">
            </div>
            <h3 class="title-product" onclick="goToProd(`+ (data[products[indexInArray]].id - 1) + `)">` + data[products[indexInArray]].title + `</h3>
            <div class="price-product">
                <ins>
                
                <span><strike>$`+ (data[products[indexInArray]].price.replace("$", "")) * 2 + `</strike></span>
                    <span>`+ data[products[indexInArray]].price + `</span>
                </ins>
            </div>
        </div>
        <div class="">
            <span>
                <button class="btn-cart add-to-cart `+ (carted ? "disable" : "") + `" ` + (carted ? "disabled" : "") + ` onclick="addToCart(` + data[products[indexInArray]].id + `, this)"><i class="fa-solid fa-cart-arrow-down fa-lg"></i></button>
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
        countP = products.length
        if (localStorage.getItem("page")) {
                var curPage = localStorage.getItem("page")
            }
            else {
                localStorage.setItem("page", 0)
                var curPage = 0
            }
        
            if (curPage > 0) {
                $("<button onclick='pageChange(" + (parseInt(curPage) - 1) + ")'>Pre</button>").appendTo("#page-breaker");
            }
            console.log(countP)
            for (let index = 0; index < Math.ceil(parseInt(countP) / limit); index++) {
                $("<button onclick='pageChange(" + index + ")' " + (index == curPage ? "class='active'" : "") + ">" + (index + 1) + "</button>").appendTo("#page-breaker");
        
            }
            if (curPage <  Math.ceil(parseInt(countP) / limit) - 1 && Math.ceil(parseInt(countP) / limit) > 0) {
                $("<button onclick='pageChange(" + (parseInt(curPage) + 1) + ")'>Next</button>").appendTo("#page-breaker");
            }
    }
    );
});

function goToProd(id) {
    localStorage.setItem("p_id", id);
    window.location.href = "../product_detail/product_detail.html";
}
function pageChange(i) {
    localStorage.setItem("page", i)
    window.location.reload()
}
