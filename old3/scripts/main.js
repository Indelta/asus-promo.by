window.onscroll = function() {
  if ($(document).scrollTop()>0) {$('.helloheader').css('background-color', '#000');$('.header-title').css('display', 'inline-block');$('.header-title2').hide()}
  else {$('.helloheader').css('background-color', 'rgba( 0, 0, 0, 0 )');$('.header-title').hide(); $('.header-title2').css('display', 'inline-block');}
}
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	$('.without-compromise').css('top', '363px');
	  $('.description-compromise').css('width', '553px');
	  $('.description-compromise').css('z-index', '9');
	  $('.description-freez').css('width', '1015px');
	  $('.description-freez').css('left', '112px');
	  $('.one-char').css('display', 'inline-block');
	  $('.one-char').css('width', '502px');
	  $('.description-util').css('width', '628px');
	  $('.description-char').css('padding', '9px 7px');
	  $('.header-logo-asus').css('width', '175px');
	  $('.header-logo-asus').css('height', '45px');
	  $('.header-title').css('width', '680px');
	  $('.header-logo-rog').css('width', '274px');
	  $('.header-title2').css('width', '680px');
	  $('.header-title2').css('display', 'inline-block');
	  $('.header-logo-rog').css('display', 'inline-block');
	  $('.header-logo-asus').css('display', 'inline-block');
	  $('.one-char:nth-child(2n)').css('margin-left', '50px');
}