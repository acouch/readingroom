Drupal.behaviors.ac_module = function(context) {
  $('div.readingroom ul', context).addClass('processed').each(function(){
    $(this).find("span.clicker").click(function(){
     if ($(this).hasClass('closed')) {
       $(this).siblings('.teaser').slideDown('700');
       $(this).removeClass('closed').addClass('open');
     } else {
      $('.teaser').slideUp('700');
       $(this).removeClass('open').addClass('closed');
     }  
    });
  });
  $("#tabs").tabs();
}
