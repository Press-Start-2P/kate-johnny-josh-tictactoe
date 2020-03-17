(() => {

    var computer = () => {

    };

    // start - all <td> gt class on
    $("td").toggleClass('on');

    // on click - img to x icon, remove class 'on'
    $('tr .on').click(function () {
        $(this).removeClass('on').children().attr('src', 'img/Xicon.png');
        computer();
    });

})();