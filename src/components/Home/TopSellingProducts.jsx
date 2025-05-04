
import { products } from "../../json/product";
import ProductCard from "../ProductCard";

const TopSellingProducts = () => {


  return (
    <div>
      <p className="text-2xl pb-5 font-semibold">Top Selling Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-8">
        {products.slice(0, 5).map((data) => (
          <ProductCard key={data.id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
