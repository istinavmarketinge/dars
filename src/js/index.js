
import Header from "%modules%/header/header";
import PopularCategories from "%modules%/popular-categories/popular-categories";
import PopularBrands from "%modules%/brands/brands";
import BannerProduct from "%modules%/banners/banners";
import Banner from "%modules%/banners/banner-big";
import Tabs from "%modules%/tabs/tabs";
import CatalogMenu from "%modules%/catalog-menu/catalog-menu";
import Counter from "%modules%/countdown/countdown";
import Action from "%modules%/action/action";
import CatalogSections from "%modules%/catalog-sections/catalog-sections";
import ElementsList from "%modules%/elements_list/elements_list";
import CatalogDetailPage from "%modules%/catalog-detail-page/catalog-detail-page";
import Compare from "%modules%/compare/compare";
import BrandsDetaiTop from "%modules%/brands-detail-top/brands-detail-top";
import BrandsTop from "%modules%/brands-top/brands-top";
import AffiliateProgram from "%modules%/affiliate-program/affiliate-program";
import Modal from "%components%/modal/modal";
import Auth from "%components%/auth/auth";
import CartPage from "%modules%/cart-page/cart-page";
import PersonalAccount from "%modules%/personal-account/personal-account";
import PersonalAccountCreatePromocode from "%modules%/personal-account-create-promocode/personal-account-create-promocode";
import CatalogFilter from "%modules%/catalog-filter/catalog-filter";
import PersonalAccountStatistics from "%modules%/personal-account-statistics/personal-account-statistics";
import Orders from "%modules%/orders/orders";
import OrderPage from "%modules%/cart-page-order/cart-page-order";
import Mask from "%modules%/inputmask/inputmask";







window.app = {};

window.app.header = new Header();
window.app.popularCategories = new PopularCategories();
window.app.popularBrands = new PopularBrands();
window.app.bannerProduct = new BannerProduct();
window.app.banner = new Banner();
window.app.tabs = new Tabs();
window.app.catalogMenu = new CatalogMenu();
window.app.counter = new Counter();
window.app.action = new Action();
window.app.catalogSections = new CatalogSections();
window.app.elementsList = new ElementsList();
window.app.catalogDetailPage = new CatalogDetailPage();
window.app.compare = new Compare();
window.app.brandsDetaiTop = new BrandsDetaiTop();
window.app.brandsTop = new BrandsTop();
window.app.affiliateProgram = new AffiliateProgram();
window.app.modal = new Modal();
window.app.auth = new Auth();
window.app.cartPage = new CartPage();
window.app.personalAccount = new PersonalAccount();
window.app.personalAccountCreatePromocode = new PersonalAccountCreatePromocode();
window.app.catalogFilter = new CatalogFilter();
window.app.orderPage = new OrderPage();

window.app.personalAccountStatistics = new PersonalAccountStatistics();
window.app.orders = new Orders();
window.app.mask = new Mask();



document.addEventListener('DOMContentLoaded', () => {
    window.app.header.init();
    window.app.popularCategories.init();
    window.app.popularBrands.init();
    window.app.bannerProduct.init();
    window.app.banner.init();
    window.app.tabs.init();
    window.app.catalogMenu.init();
    window.app.counter.init();
    window.app.action.init();
    window.app.catalogSections.init();
    window.app.elementsList.init();
    window.app.catalogDetailPage.init();
    window.app.compare.init();
    window.app.brandsDetaiTop.init();
    window.app.brandsTop.init();
    window.app.affiliateProgram.init();
    window.app.modal.init();
    window.app.auth.init();
    window.app.cartPage.init();
    window.app.personalAccount.init();
    window.app.personalAccountCreatePromocode.init();
    window.app.catalogFilter.init();
    window.app.orderPage.init();

    window.app.personalAccountStatistics.init();
    window.app.orders.init();
    window.app.mask.init();
})

