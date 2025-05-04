import { category } from "../../json/main";

const ProductCategory = () => {
  return (
    <div className="flex justify-center overflow-x-hidden gap-10 p-8 bg-gray-200">
      {category.map((data) => (
        <div key={data?.id}>
          <div className="w-28 h-28 rounded-full border bg-white hover:scale-110 hover:shadow-lg hover:shadow-black/30 transition duration-500 cursor-pointer">
            <img
              className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500 cursor-pointer"
              src={data?.image}
              alt=""
            />
          </div>
          <p className="text-center pt-5 font-semibold">{data?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;