$(".option").on("click", function() {
    $(".option").removeClass("active");
    $(this).addClass("active");
    var type = $(this).data("option");
    setTimeout(function() {
        if (type === "day") {
            $(".time").attr('class', 'time day');
        } else if (type === "night") {
            $(".time").attr('class', 'time night');
        } else if (type === "dusk") {
            $(".time").attr('class', 'time dusk');
        } else if (type === "sunset") {
            $(".time").attr('class', 'time sunset');
        }
    }, 500);
});

function updateCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = hours >= 12 ? "PM" : "AM";

    // Chuyển đổi giờ sang định dạng 12 giờ
    hours = hours % 12;
    hours = hours ? hours : 12; // Nếu hours = 0, hiển thị là 12

    // Đảm bảo rằng các số đều có hai chữ số
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    $('.current-time').text(formattedTime);
}

setInterval(updateCurrentTime, 1000);