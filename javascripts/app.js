var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text(140);
        $('.btn').addClass('disabled');
    });
    
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
        
        if (charactersLeft < 0) {
            $('.btn').addClass('disabled');
        } else if (charactersLeft == 140) {
            $('.btn').addClass('disabled');
        } else {
            $('.btn').removeClass('disabled');
        }
    });
    
    $('.btn').addClass('disabled');
};

$(document).ready(main);
