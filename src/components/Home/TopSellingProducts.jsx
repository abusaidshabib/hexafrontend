import { useState } from "react";
import { products } from "../../json/product";
import ProductCard from "../ProductCard";
import CustomDrawer from "../CustomDrawer"; // import your reusable drawer

const TopSellingProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDrawer = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <p className="text-2xl pb-5 font-semibold">Top Selling Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-8">
        {products.slice(0, 5).map((data) => (
          <ProductCard key={data.id} product={data} onView={() => handleOpenDrawer(data)} />
        ))}
      </div>

      <CustomDrawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        title={selectedProduct?.name || "Product"}
        product={selectedProduct}
      >
      </CustomDrawer>
    </div>
  );
};

export default TopSellingProducts;
