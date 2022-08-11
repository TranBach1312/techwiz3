
$(".header").load("../layout/header.html")

$(".footer").load("../layout/footer.html")
var c = `<script src="https://kit.fontawesome.com/2f97f7412a.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../layout/style.css">
        <link rel="stylesheet" href="../layout/header-css.css">
        <script src="../layout/header-controller.js"></script>
        <link rel="stylesheet" href="../layout/footer-css.css">`;

$("head").append(c)
$(".header").after($(`
        <div style="width: 100%; height: 100px;"></div>`));

function goHome() {
    window.location.href = "../index.html";
}