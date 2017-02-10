var hambs= document.getElementById("hambs");
var close = document.querySelector(".social.close");
var nav = document.querySelector(".nav");
hambs.addEventListener("click", function () {
	nav.classList.add('nav-opened');
	close.classList.add('nav-opened');
}, false);

close.addEventListener("click", function() {
	nav.classList.remove('nav-opened');
	close.classList.remove('nav-opened');
});


// $(document).ready(function() {
// 	$(".scroll").on('click',function(event) {
// 		if(this.hash !=="") {
// 			event.preventDefault();
// 			var hash = this.hash;
// 			$('html,body').animate({
// 				scrollTop: $(hash).offset().top
// 			}, 1000, function() {
// 				window.location.hash = hash;
// 			});
// 		}
// 	});

// )

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});