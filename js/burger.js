"use strict";
//
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.nav,.content').toggleClass('active');
        $('body').toggleClass('lock')
    });
});