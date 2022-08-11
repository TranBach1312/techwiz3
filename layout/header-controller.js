
$(document).ready(function () {
    var category;
    $.getJSON("./data/category.JSON",
        function (data1) {
            category = data1;
            category.forEach(element1 => {
                let c = $("<ul><h3>" + element1.name + "</h3></ul>");
                $(".main-menu .sub-menu").append(c)
            });

        }

    )
    $.getJSON("./data/sub_category.JSON",
        function (data2, textStatus, jqXHR) {
            sub_category = data2;
            sub_category.forEach(element => {
                $.each($(".main-menu .sub-menu>ul"), function (indexInArray, valueOfElement) {
                    if (element.id_category - 1 == indexInArray) {
                        let d = $("<li><a href='product/product.html?category_id="+element.id_category+"'>" + element.name + "<a></li>");
                        $(d).appendTo($(".main-menu .sub-menu>ul")[indexInArray]);
                    }
                });
            });
        });

    
    
    
});
