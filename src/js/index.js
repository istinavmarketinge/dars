
import Header from "%modules%/header/header";
import PopularCategories from "%modules%/popular-categories/popular-categories";
import PopularBrands from "%modules%/brands/brands";
import BannerProduct from "%modules%/banners/banners";
import Banner from "%modules%/banners/banner-big";
import Tabs from "%modules%/tabs/tabs";
import Articles from "%modules%/articles/articles";
import Sale from "%modules%/sale/sale";





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

window.app.tabs = new Tabs();
window.app.tabs.init();



