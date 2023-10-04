const AffiliateProgram = class AffiliateProgram {
    constructor() {}
	openAffiliateProgram() {		
	}
	
    init() {
		this.openAffiliateProgram();
    }
}

export default AffiliateProgram;


if(document.querySelector(".affiliate-program__more ")) {
    jQuery(document).ready(function() {

        $('.affiliate-program__more ').on('click',function(){
            $('.affiliate-program__right').addClass('open');
        });
        $('.affiliate-program__hide-details').on('click',function(){
            $('.affiliate-program__right').removeClass('open');
        });
        $('.affiliate-program__button').on('click',function(){
            $('.thanks-you').addClass('open');
        });
        $('.thanks-you__close').on('click',function(){
            $('.thanks-you').removeClass('open');
        });
        
        });
}
