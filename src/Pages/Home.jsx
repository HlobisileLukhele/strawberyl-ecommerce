import { IoMdArrowForward } from "react-icons/io";
import Products from "@/components/Products";
import ServiceCard from "@/components/ServiceCard";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuShieldCheck, LuCreditCard, LuPhoneCall  } from "react-icons/lu";




const Home = () => {
    const products = [
        {
            id: 1,
            name: "Crystal Drop Earrings",
            category: "Earrings",
            price: "R99",
            image: "https://media.istockphoto.com/id/1289163992/photo/flowers-earrings-isolated.jpg?s=612x612&w=0&k=20&c=7HMQijV5SoKh5zd8l2Dc4qKMBJ9BkQA4QQ_Ln4cCDuU="
        },
        {
            id: 2,
            name: "Harvest Gold Earrings",
            category: "Earrings",
            price: "R99",
            image: "https://media.istockphoto.com/id/1289163992/photo/flowers-earrings-isolated.jpg?s=612x612&w=0&k=20&c=7HMQijV5SoKh5zd8l2Dc4qKMBJ9BkQA4QQ_Ln4cCDuU="
        },
        {
            id: 3,
            name: "Purple Green Flower Earrings",
            category: "Earrings",
            price: "R99",
            image: "https://media.istockphoto.com/id/1289163992/photo/flowers-earrings-isolated.jpg?s=612x612&w=0&k=20&c=7HMQijV5SoKh5zd8l2Dc4qKMBJ9BkQA4QQ_Ln4cCDuU="
        },
    ];
  return (
    <>
       <div className="flex flex-col justify-center items-center w-3/4 md:w-1/2 mx-auto">
          <h2 className="text-4xl md:text-7xl text-center my-3 title">Sustainable Beauty</h2>
          <p className="opacity-60 text-lg text-center my-4">Handcrafted bamboo accessories that blend elegance with sustainability. Each piece tells a story of craftsmanship and environmental consciousness.</p>
          <a href="#" className="bg-[#7c8c7d] font-semibold flex gap-x-4 items-center text-white rounded-lg px-4 py-2 outline-none hover:bg-[#7c8c7d]/90 duration-500 mt-2">
            <span className="capitalize">Shop Now</span>
             <IoMdArrowForward/>
          </a>
       </div>

       <Products
            title="Featured Products" 
            products={products} 
       />

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-4 w-11/12 my-32 mx-auto">
            <ServiceCard
                icon={CiDeliveryTruck}
                title="Order Delivery"
                description="Courier services available"
            />
            <ServiceCard
                icon={LuShieldCheck}
                title="Safe Money Back"
                description="30 days money back"
            />
            <ServiceCard
                icon={LuCreditCard}
                title="Secure Payment"
                description="All online payments protected"
            />
            <ServiceCard
                icon={LuPhoneCall}
                title="Online Support"
                description="Technical support 24/7"
            />
            
       </div>

       <Products
            title="Top Selling Products" 
            products={products} 
       />
    </>
  )
}

export default Home