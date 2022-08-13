
var carts = JSON.parse(localStorage.getItem("carts"));
var carted = false;
var p_id = localStorage.getItem("p_id");
var total = 0;
var numP = 0;
$(document).ready(function () {
    
    $(function getData(){
    if (p_id) {
        $.getJSON("../data/product.JSON", function (data) {
            $.each(data, function (indexInArray, valueOfElement) {
                if (carts) {
                    carts.forEach(cart => {
                        if (cart == data[indexInArray].id) {
                            total += data[indexInArray].price.replace("$", "") * 2
                            // console.log(total)
                            carted = true;
                            numP++;
                            var c = `<tr>
                            <td class="cart-product-item">
                                <div class="cart_product-item_img">
                                    <a href="#"><img src="../img/product_img/` +
                                    data[indexInArray].id_category + '/' + data[indexInArray].id_sub_category +
                                    '/' + data[indexInArray].id +
                                    `/1.jpg" alt=""></a>
                                </div>
                                <div class="cart_product-item_content">
                                    <a href="#">
                                        <h3 class="cart_product-item_title">` +
                                    data[indexInArray].title +
                                    `</h3>
                                    </a>
                                    <p>Color: <span style="color: ` +
                                    data[indexInArray].color + `;"> ` + ntc.name(data[indexInArray].color)[1] +
                                    `</span></p>
                                </div>
                            </td>
                            <td class="col-md-1">
                                <p>` +
                                    data[indexInArray].price +
                                    `</p>
                                <p style="color: red">( -50% )</p>
                            </td>
                            <td class="col-md">
                                <div class="cart_product-item_price">
                                ` +
                                    data[indexInArray].price +
                                    `
                                </div>
                            </td>
                            <td class="col-md">
                                <a href="#" onclick="return false">
                                    <box-icon name='trash' type='solid' onclick="del(`+data[indexInArray].id+`)"></box-icon>
                                </a>
                            </td>
                        </tr>`;
                            $(c).appendTo("tbody");
                        }
                    });
                }
            });
            $(".total-product").text(numP);
            $(".total-not-discount").text("$" + total);
            $(".order-price-total").text("$" + total/2)
            console.log(total)
        });
    }})
});