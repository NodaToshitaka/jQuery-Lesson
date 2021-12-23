$(function() {
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000ff',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});


$(function(){
  $('.box2').on('click', function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});