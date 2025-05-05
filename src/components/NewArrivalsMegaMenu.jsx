import { newArrivals } from "../json/product";
import SingleProduct from "./SingleProduct";
const NewArrivalsMegaMenu = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 pt-8">
            {newArrivals.map((data) => (
                <SingleProduct key={data?.id} product={data} />
            ))}
        </div>
    );
};

export default NewArrivalsMegaMenu;