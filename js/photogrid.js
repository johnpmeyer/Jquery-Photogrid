var main = function() {
     $('.photoGridImg img').fadeIn(1000);
     //PHOTOGRID SCRIPT
     var pgcontainer = $('.photogridContainer');
     var pgwidth = $('.photogridContainer').width();
     var pgheight = $('.photogridContainer').height();
     var pgrow = $('.photoGridRow');
     var pgimg = $('.photoGridImg');
     if (pgheight > pgwidth) {
          pgcontainer.css({'height':pgwidth});
     } else {
          pgcontainer.width(pgheight);
          pgcontainer.css('margin-left', 'auto');
          pgcontainer.css('margin-right', 'auto');
     };
     //SETS IMAGE AND ROW WIDTH RELATIVE TO CONTAINERS WIDTH AS DETERMINED IN ABOVE STATEMENTS
     pgrow.height(pgheight/4);
     pgrow.width(pgcontainer.width());
     var pgrowwidth = $('.photoGridRow').width();
     var pgrowheight = $('.photoGridRow').height();
     pgimg.height(pgheight/4);
     pgimg.width(pgheight/4);
     pgimg.css('border', '1px solid black');
     //PHOTO ENLARGE
     $('.photoGridImg').on("click", function() {
          var clickedImage = $(this).children().attr('src');
          var clickedImageURL = "url("+clickedImage+")";
          if ($('.photoGridFluid').is(":visible") === true) {
               $('.photoGridFluid').hide();
               $('.photoGridFluidDuplicate').show();
               $('.photoGridFluidDuplicate').height(pgheight);
               $('.photoGridFluidDuplicate').css({'background': clickedImageURL});
               $('.photoGridFluidDuplicate').css("background-size", "cover");
          };
     });
     $('.photoGridFluidDuplicate').on("click", function() {
          $('.photoGridFluid').show();
          $('.photoGridFluidDuplicate').hide();
     });
     // DROPDOWN FUNCTION
      $(".dropdown").hover(function() {
     $(".navbarDropdown .navbarDropdownLink").toggle();
     });
};
$(document).ready(main);