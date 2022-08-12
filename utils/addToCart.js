
    
    // $(".btn-cart").click(function (e) { 
    //     // e.preventDefault();
    //     $(this).addClass("disable");
    //     // $(selector).attr(attributeName, value);
    // });

function addToCart(id, that = null) {
    if(that != null) {
        $(that).attr("disabled", true);
        $(that).addClass("disable")
    }

    if(!localStorage.getItem("carts")){
        localStorage.setItem("carts", "[]")
    }
    var carts = []
    var carts = JSON.parse(localStorage.getItem("carts"));
    carts.push(id);
    localStorage.setItem("carts", JSON.stringify(carts));
}