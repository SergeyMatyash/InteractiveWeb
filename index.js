var whoresContainer = document.getElementById('whores-container');

for(i=0; i<whores.length; i++) {
   var whoresDiv = '<h3>' + whores[i].name + '</h3>';
   whoresContainer.innerHTML += '<div class="item"><img src="http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg">' + whoresDiv + '</div>';
 }


