$(document).ready(function () {
    function getDate() {
        let date = new Date();
        //console.log(date.getFullYear());
        $("<p>" + date.getFullYear() + "</p><b>Year</b>").appendTo("#year");
        $("<p>" + (date.getMonth() + 1) + "</p><b>Month</b>").appendTo("#month");
        $("<p>" + date.getDate() + "</p><b>Day</b>").appendTo("#day");
        $("<p>" + date.getHours() + "</p><b>Hour</b>").appendTo("#hour");
        $("<p>" + date.getMinutes() + "</p><b>Minutes</b>").appendTo("#minutes");
    }
    setTimeout(getDate, 1000)
    $(".register-form button").click(function (e) {
        e.preventDefault();
        localStorage.setItem("uName", $(".register-form input").val())

        location.reload();
    });
    console.log(1)
});
