import { useState, useEffect } from "react";
import { PiEyeBold } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiMinus, FiPlus, FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { IoStarHalf } from "react-icons/io5";
import ProductOne from '@/assets/product-one.png'

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const minusQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setQuantity('');
      return;
    }
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setQuantity(numValue);
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <a 
        href="#"
        onClick={openModal}
        className="absolute md:hidden flex w-10 h-10 items-center top-[25%] left-1/2 transform -translate-x-1/2 justify-center rounded-full bg-gray-200 md:group-hover:flex z-20">
        <PiEyeBold />
      </a>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5))',
            backdropFilter: 'blur(3px)'
          }}
          onClick={closeModal}
        >
          <div 
            className="md:h-[95vh] h-[85vh] w-full max-w-6xl bg-white"
            style={{
              animation: 'appear 0.15s cubic-bezier(0, 1.8, 1, 1.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col w-full h-auto">
              {/* Header */}
              <div className="flex w-full justify-between items-center py-2 px-4">
                <div className="flex-grow text-2xl font-bold"></div>
                <div 
                  onClick={closeModal}
                  className="flex justify-center cursor-pointer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#000000" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="flex flex-col pb-10 md:pb-0 md:flex-row w-full h-[82vh] px-4 md:px-8 overflow-y-auto mb-14">
                <div className="h-44 md:h-full w-full md:w-5/12 flex items-center justify-center bg-gray-100 mb-4 md:mb-0">
                  <img src={ProductOne} alt="product image" className="object-contain object-center h-full min-w-full" />
                </div>

                <div className="w-full md:w-7/12 px-2 md:px-4">
                  <div className="px-4 py-1 uppercase text-sm font-medium text-center bg-[#7c8c7d] text-white inline-block">SALE 20% OFF</div>
                  <h2 className="text-2xl md:text-3xl font-semibold my-2">Baby Strollers</h2>

                  <div className="flex items-center gap-x-1 text-sm my-2 font-medium">
                    <div className="flex items-center">
                      <GoStarFill className=" text-amber-500"/>
                      <GoStarFill className=" text-amber-500"/>
                      <GoStarFill className=" text-amber-500"/>
                      <IoStarHalf className=" text-amber-500"/>
                      <FiStar className="text-gray-200"/>
                    </div>
                    <div className="opacity-50">(10 customer reviews)</div>
                  </div>

                  <p className="my-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ipsum laborum architecto quae debitis, praesentium quasi cum maiores a assumenda!</p>
                  
            <div className="mb-6 md:w-7/12 w-full">
                <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                    <div>
                        <h2 className="font-semibold text-lg">Price</h2>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Quantity</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-x-4 whitespace-nowrap my-6">
                    <div>
                        <p className="md:text-2xl text-xl font-medium">
                            $125.75 <span className="opacity-40 line-through text-base ml-2">$132.17</span>
                        </p>
                    </div>
                    <div className="flex gap-x-2">
                    <button
                        onClick={minusQuantity}
                        className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:cursor-pointer"
                    >
                        <FiMinus />
                    </button>
                    <input
                        type="text"
                        name="quantity"
                        className="w-16 h-10 border outline-none border-gray-200 text-center"
                        value={quantity === '' ? '' : quantity}
                        onChange={handleQuantityChange}
                    />
                    <button
                        onClick={addQuantity}
                        className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:cursor-pointer"
                    >
                        <FiPlus />
                    </button>
                    </div>
                    </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-x-4 gap-x-0 whitespace-nowrap">
                        <button className="uppercase bg-[#7c8c7d] hover:bg-[#7c8c7d]/90 duration-200 text-white px-4 py-2 font-medium hover:cursor-pointer w-full sm:w-auto">
                            Add To Cart
                        </button>
                      
                        <button className="capitalize flex items-center justify-center gap-x-3 bg-gray-100 hover:bg-gray-200 duration-200 px-4 py-2 hover:cursor-pointer w-full sm:w-auto">
                            <IoMdHeartEmpty /> <span>Add To Wishlist</span>
                        </button>
                </div>
            </div>

                  <hr className="mt-10 border-gray-200" />

                  <div className="flex items-center gap-x-2 mb-3 mt-5">
                    <h2 className="font-semibold uppercase">sku:</h2>
                    <p className="">CLT584E63A</p>
                  </div>
                  <div className="flex items-center gap-x-2 my-3">
                    <h2 className="font-semibold capitalize">Category:</h2>
                    <p className="text-sm">Earings, Bags</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes appear {
          from {
            opacity: 0;
            transform: translateX(-3rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
