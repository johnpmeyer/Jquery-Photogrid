var main = function() {
	$("#indexcopy").fadeIn(1000);
	var resumebutton = $(".showresume h3 a");
	resumebutton.on("click", function() {
     	$(".resume").slideToggle(1000);
     	if (resumebutton.text() === "Show Resume") {
     		resumebutton.text("Hide Resume");
     		$(".mainabout").css("height", "auto");
     		}
     	else {
     		resumebutton.text("Show Resume");
     		$(".mainabout").css("height", "80vh");
     	};
	});
     $(".dropdown").hover(function() {
          $(".navbarDropdown .navbarDropdownLink").toggle();
     });
     //PHOTOGRID SCRIPT
};
$(document).ready(main);