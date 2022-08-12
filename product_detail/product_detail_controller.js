
$(document).ready(function () {
    var p_id = localStorage.getItem("p_id");
    if (p_id) {
        $.getJSON("../data/product.JSON",
            function (data) {
                var c = `<div class="row">
    <div class="col-2-big-img">
        <div class="main-img" style="display: flex;">
            <img src="../img/product_img/`+ data[p_id].id_category + '/' + data[p_id].id_sub_category + '/' + data[p_id].id + `/1.jpg"
                width="100%" />
        </div>
    </div>
    <div class="col-3-sub-img">
        `
                for (i = 2; i <= data[p_id].img; i++) {
                    c += `<div class="small-img-col">
                    <img src="../img/product_img/`+ data[p_id].id_category + '/' + data[p_id].id_sub_category + '/' + data[p_id].id + `/` + i + `.jpg"
                        width="100%" class="small-img3" onclick="showing(this)" />
                </div>`
                }
                c += ` </div>
    <div class="col-1-text">
        <p id="Name">`+ data[p_id].title + `</p>
        <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
        <div class="price">
            <b id="Price">`+ data[p_id].price + `</b>
            <del id="DelPrice">$`+ (data[p_id].price.replace("$", "")) * 2 + `</del>
                <span class="sale"id="Sale">-50
                <span>%</span></span>
        </div>
        <div class="list-color" >
                <div class="color" style="background-color: `+ data[p_id].color + `;"> </div>
        <p id="Color" style="color: `+ data[p_id].color + `;">Color: ` + ntc.name(data[p_id].color)[1] + `</p>

        </div>
        <div class="size">
            <span id="Size">S</span>
        </div>
        
        <p id="Stock">Stock</p>
        <!-- Stock : Available or not available -->
        <a href="" class="btn">Add to Cart</a>
        <a href="" class="btn1">Buy</a>
        <a href="" class="btn1">&#10084;</a>
          
            <div class="post">
            <h3>Product Detail</h3>
             <p id="content" class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci debitis culpa ipsam. Repellendus dicta rerum numquam cumque perferendis iure
              Architecto, tenetur aperiam.</p>
          <button onclick="readMore(this)">Read More</button>
          </div>
    </div>
</div>`;
                $(c).appendTo(".product");
            }
        );
    }

});
