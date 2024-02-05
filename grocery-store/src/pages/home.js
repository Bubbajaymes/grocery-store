
import Hero from "../components/home/hero";
import Information from "../components/home/information";
import ProductCategories from "../components/home/productCategories";
import RecentProducts from "../components/home/recentProducts";
import SaleProducts from "../components/home/saleProducts";
import TopBrands from "../components/home/topBrands";

function AppHome() {
    return (
        <div className="container">
            <Hero />
            <RecentProducts />
            <Information />
            <ProductCategories />
            <SaleProducts />
            <TopBrands />
        </div>
    );
};

export default AppHome;