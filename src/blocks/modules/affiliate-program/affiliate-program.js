const AffiliateProgram = class AffiliateProgram {
    constructor() {}
	openAffiliateProgram() {		
	}
	
    init() {
		this.openAffiliateProgram();
    }
}

export default AffiliateProgram;


if(document.querySelector(".affiliate-program__more")) {
    jQuery(document).ready(function() {

        $(document).on('click','.js-affiliate-program__more',function(){
            $('.js-affiliate-program__right').addClass('open');
        });
        $(document).on('click','.js-affiliate-program__hide-details',function(){
            $('.js-affiliate-program__right').removeClass('open');
        });
    });
}
