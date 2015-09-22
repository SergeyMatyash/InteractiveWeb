$(document).ready(function() {

    var whoresContainer = document.getElementById('whores-container');

    for(i=0; i<whores.length; i++) {
       var whoresInnerContainer = '<h3>' + whores[i].name + '</h3>';
       whoresContainer.innerHTML += '<div class="item"><a href="#popup"><img src="http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg"></a><a href="#popup">' + whoresInnerContainer + '</a></div>';
    }

    $('a').click(function () {
    	$('#overlay').addClass('open');
    	$('#popup').addClass('open');
    });
    $('#overlay').click(function () {
    	$('#overlay').removeClass('open');
    	$('#popup').removeClass('open');
    });
});






