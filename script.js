$(document).ready(function() {
  $('.menu--button-open').click(function(){
    $('.menu').fadeIn('300');
  });
  $('.menu--button-close').click(function(){
    $('.menu').fadeOut('300');
  })

  // $('.menu--services').click(function(){
  //   if('.menu--services-dropdown'.length == 0){
  //     $(this).append(
  //       "<div class='menu--services-dropdown'>",
  //         "<p>Drafting</p>",
  //         "<p>Engineering</p>",
  //       "</div>"
  //     )
  //   }else{
  //     $('this').children().remove();
  //   };
  // })
});
