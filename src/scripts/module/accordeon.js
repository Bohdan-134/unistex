$(document).ready(function() {
    $('.accordeon-item').click(function(event) {
        $(this).toggleClass('accordeon-item__active');
        $(event.currentTarget.children[1]).slideToggle(300);
    });
    $('.footer-spoiler__title').click(function() {
        $(this).next().slideToggle(300);
    });
});