$(document).ready(function () {
    localStorage.setItem("p_id", "1");

    p_id = localStorage.getItem("p_id");
    $.getJSON("../data/product.JSON", function (data, textStatus, jqXHR) {
            $($('<div class="item-cat-prod row"></div>')).appendTo($("list-prod"));
            console.log(data)
            $.each(data, function (indexInArray, valueOfElement) {
                let c = `
                <div class="product">
                                                    <div class="thumb-product">
                                                        <a href="">
                                                            <img src="../img/product_img/`+data[indexInArray].id_category+'/'+data[indexInArray].id_sub_category+'/'+data[indexInArray].title+`/Lafu1.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="info-product">
                                                        <div class="list-color">
                                                            <img src="/xam.png" alt="">
                                                        </div>
                                                        <h3 class="title-product">Ao thun in
                                                            hinh</h3>
                                                        <div class="price-product">
                                                            <ins>
                                                                <span>390.000</span>
                                                            </ins>
                                                        </div>
                                                    </div>
                                                    <div class="add-to-cart">
                                                        <span>
                                                            <i class="fa-solid fa-cart-arrow-down fa-lg"></i>
                                                        </span>
                                                    </div>
                                                </div>`
                if (indexInArray % 4 == 0) {
                    $($('<div class="item-cat-prod row"></div>')).appendTo($(".list-prod"));
                }
                
                $(c).appendTo($(".item-cat-prod")[Math.floor(indexInArray / 4)]);
                console.log(indexInArray)
            });
        }
    );
})

