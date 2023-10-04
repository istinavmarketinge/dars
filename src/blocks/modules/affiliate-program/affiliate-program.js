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
        
        });
}
