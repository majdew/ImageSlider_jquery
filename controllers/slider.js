$(document).ready(() => {
    let x = 0;

    $('#prevBtn').click(() => {
        x = (x >= 100) ? (x - 100) : 900;
        $('.slide').css('left', -x + "%");
    });

    $('#nextBtn').click(() => {
        x = (x <= 900) ? (x + 100) : 0;
        $('.slide').css('left', -x + "%");
    });
});