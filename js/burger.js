"use strict";
//
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.nav,.content_box').toggleClass('active');
        $('body').toggleClass('lock')
    });
});