const Header = class Header {
    constructor() { 
        
    }
    init() {
    }
}

export default Header;


jQuery(document).ready(function() {
	
	$('.header-top__city').on('click',function(){
		$('.header-top__modal-city').addClass('open');
	});
    $('.header-top__modal-close').on('click',function(){
		$('.header-top__modal-city').removeClass('open');
	});
	
});