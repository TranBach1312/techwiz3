$(document).ready(function () {
    function getDate() {
        let date = new Date();
        //console.log(date.getFullYear());
        $("#year").html("")
        $("<p>" + date.getFullYear() + "</p><b>Year</b>").appendTo("#year");    
        $("#month").html("")
        $("<p>" + (date.getMonth() + 1) + "</p><b>Month</b>").appendTo("#month");       
        $("#day").html("")
        $("<p>" + date.getDate() + "</p><b>Day</b>").appendTo("#day"); 
        $("#hour").html("")
        $("<p>" + date.getHours() + "</p><b>Hour</b>").appendTo("#hour");
        $("#minutes").html("")
        $("<p>" + date.getMinutes() + "</p><b>Minute</b>").appendTo("#minutes");
        $("#seconds").html("")
        $("<p >" + date.getSeconds() + "</p><b></b>").appendTo("#seconds");
    }
    setInterval(getDate, 1000)
    $(".register-form button").click(function (e) {
        e.preventDefault();
        localStorage.setItem("uName", $(".register-form input").val())

        location.reload();
    });
    console.log(1)
});
