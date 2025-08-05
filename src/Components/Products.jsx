import ProductDetail from "@/pages/ProductDetail";
import { IoMdArrowForward } from "react-icons/io";

const Products = ({
  title = "Featured Products",
  viewAllLink = "#",
  products = [],
  shop = false,
}) => {
  const gridClass = shop
    ? "grid  md:grid-cols-3 md:gap-2 gap-x-0 -ml-4 md:-ml-0 gap-y-4 my-8"
    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-4 md:gap-8 my-8";

  return (
    <div className={`w-11/12 mt-20 mx-auto ${shop && 'mt-0'}`}>
      <div className="flex justify-between items-center flex-wrap gap-y-4">
        <h2 className="text-3xl opacity-80 font-semibold title">{title}</h2>
        <a
          href={viewAllLink}
          className="flex gap-x-1 items-center hover:underline opacity-60"
        >
          <span className="capitalize">View All</span>
          <IoMdArrowForward />
        </a>
      </div>

      <div className={gridClass}>
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 mx-auto md:mx-0 rounded-lg h-auto w-[350px] md:w-72 hover:shadow-xl transform duration-300 group relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-sm opacity-60">{product.category}</h3>
              <h2 className="text-base font-semibold">{product.name}</h2>
              <h2 className="text-base my-3 font-semibold">{product.price}</h2>
            </div>

            <ProductDetail />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
