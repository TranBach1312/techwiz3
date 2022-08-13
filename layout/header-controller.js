
$(document).ready(function () {
    var p = "..";
    if (document.location.pathname == "/index.html") {
        p = ".";
    }
    var category;
    $.getJSON(p + "/data/category.JSON",
        function (data1) {
            category = data1;
            category.forEach(element1 => {
                let c = $("<ul><h3>" + element1.name + "</h3></ul>");
                $(".main-menu .sub-menu").append(c)
            });

        }

    )
    $.getJSON(p + "/data/sub_category.JSON",
        function (data2, textStatus, jqXHR) {
            sub_category = data2;
            sub_category.forEach(element => {
                $.each($(".main-menu .sub-menu>ul"), function (indexInArray, valueOfElement) {
                    if (element.id_category - 1 == indexInArray) {
                        let d = $("<li><button onclick='goToCate(" + element.id + ")'>" + element.name + "<button></li>");
                        $(d).appendTo($(".main-menu .sub-menu>ul")[indexInArray]);
                    }
                });
            });
        });


    setTimeout(hiUser(), 1000)
    $("#searchForm").submit(function (e) { 
        e.preventDefault();
        localStorage.removeItem("gender")
        localStorage.removeItem("cateId")
        localStorage.setItem("search", $("#searchForm input").val())
        window.location.href = "../product/product.html"
    });
});
var p = "..";
if (document.location.pathname == "/index.html") {
    p = ".";
}
function goToCate(id) {
    localStorage.removeItem("gender")
    localStorage.removeItem("search")
    localStorage.setItem("page", 0)
    localStorage.setItem("cateId", id);
    window.location.href = "../product/product.html"
}
function goToGender(gender) {
    localStorage.removeItem("cateId")
    localStorage.removeItem("search")
    localStorage.setItem("page", 0)
    localStorage.setItem("gender", gender)
    window.location.href = "../product/product.html"
}
function goToPs() {
    localStorage.removeItem("gender")
    localStorage.removeItem("cateId")
    localStorage.setItem("page", 0)
    localStorage.removeItem("search")
    window.location.href = "../product/product.html"
}
function hiUser() {
    $('.uName').text("Hello " + localStorage.getItem("uName"))
}
