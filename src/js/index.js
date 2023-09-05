
import Header from "%modules%/header/header";
import PopularCategories from "%modules%/popular-categories/popular-categories";
import PopularBrands from "%modules%/brands/brands";
import BannerProduct from "%modules%/banners/banners";
import Banner from "%modules%/banners/banner-big";




window.app = {};

window.app.header = new Header();
window.app.header.init();

window.app.popularCategories = new PopularCategories();
window.app.popularCategories.init();

window.app.popularBrands = new PopularBrands();
window.app.popularBrands.init();

window.app.bannerProduct = new BannerProduct();
window.app.bannerProduct.init();

window.app.banner = new Banner();
window.app.banner.init();

