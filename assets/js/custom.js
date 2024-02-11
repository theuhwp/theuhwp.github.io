$("#buttonarrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});

$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});

$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});

$("#button4").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1000);
});

$(document).ready(function(){
	$(".box").click(function(){
	  $(this).next().slideToggle("fast");
	  $(this).find('i').toggle();
	});  

});