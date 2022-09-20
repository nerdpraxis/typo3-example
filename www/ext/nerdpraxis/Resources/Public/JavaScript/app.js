$(document).ready(function () {
  console.log('%c Document Ready fired !!!', 'background: #68CA06; color: #FFF', '');
	back2top();
	hljs.initHighlightingOnLoad();


					//Examples of how to assign the Colorbox event to elements
					$("a.lightbox").colorbox({transition:"fade", slideshow:true, maxHeight:"90%"});

					$(".callbacks").colorbox({
						onOpen:function(){ alert('onOpen: colorbox is about to open'); },
						onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
						onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
						onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
						onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
					});

	linkhovereffect();
});
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('shown.bs.dropdown', function () {
        el_overlay = document.createElement('span');
        el_overlay.className = 'screen-darken';
        document.body.appendChild(el_overlay)
    });
    everydropdown.addEventListener('hide.bs.dropdown', function () {
      document.body.removeChild(document.querySelector('.screen-darken'));
    });
  });
});
/*$(window).scroll(function () {
  if ($(".klappwrap").length > 0) {
    var hT = $('.klappwrap').parent().parent().parent().offset().top,
      hH = $('.klappwrap').parent().parent().parent().outerHeight(), wH = $(window).height(), wS = $(this).scrollTop();
    if (wS > ((hT + hH - wH) - 150) && wS < ((hT + hH - wH) + 900)) {
      reveal_board();
    } else {
      $('.ribbon.active').removeClass('active');
    }
  }
  $("body").addClass("scrolled");
});*/
function linkhovereffect(){

	$('.frame-type-text p a').each(function (index, element) {
		$(this).wrap("<div class='link-wrapper'>");
		$(this).addClass("link-primary link hover");
	});


}
function back2top(){
	$(".toTop").click(function () {
		event.preventDefault();
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				if ($(window).width() < 1024) {
					logoausblenden();
					burgerbgeinblenden()
				}
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
				if ($(window).width() < 1024) {
					logoeinblenden();
					burgerbgausblenden();
				}
			}
		});
		$('#back-top a').click(function () {
			$('body,html').animate({scrollTop: 0}, 300);
			return false;
		});
	});
}
function lastword () {
  $('.lastbold').each(function (index, element) {
    var heading = $(element);
    var word_array, last_word, first_part;
    word_array = heading.html().split(/\s+/); // split on spaces
    last_word = word_array.pop();             // pop the last word
    first_part = word_array.join(' ');        // rejoin the first words together
    heading.html([first_part, ' <span class="last-word-style">', last_word, '</span>'].join(''));
  });
}

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction () {
	if (document.body.scrollTop > 134 || document.documentElement.scrollTop > 134) {
		$("[data-naviwrap]").addClass("detached");
	} else {
		$("[data-naviwrap]").removeClass("detached");
	}
}

