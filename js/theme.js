//Fixed Header
window.onscroll = function () {
	stickHeader()
};

var header = document.getElementById("gaming-header");
var sticky = header.offsetTop;

function stickHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

$(document).ready(function () {
	$('#mobNav').on('click', function () {
		$(this).next(".hdr-main-nav").toggleClass('open');
		$(this).toggleClass('active');
	});
});





// $(document).ready(function () {
// 	$('.dropdown-click').on('click', function () {
// 		$(this).next(".dropdown-listmenu").toggleClass('show-menu');
// 	});
// });

$(document).ready(function () {
	$('.dropdown-click').on('click', function (e) {
	  e.preventDefault();
	  if($(this).next(".dropdown-listmenu").hasClass('show-menu')) {
		$(this).next(".dropdown-listmenu").removeClass('show-menu');
	  }
	  else {
		$(".dropdown-listmenu").removeClass('show-menu');  
		$(this).next(".dropdown-listmenu").addClass('show-menu');
	  }
	});
  });




