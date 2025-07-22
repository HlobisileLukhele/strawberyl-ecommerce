import React from 'react';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-[#6B7F65]" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 text-base md:text-lg mb-4">Thank you for your purchase</p>

        <p className="text-gray-700 text-sm md:text-base mb-6">
          We've received your order and will begin processing it right away. Your order number is
          <span className="font-semibold"> STB-751870</span>.
        </p>

        {/* What happens next box */}
        <div className="bg-gray-50 border rounded-lg p-5 mb-6">
          <h2 className="font-semibold text-gray-800 text-lg mb-3">What happens next?</h2>

          <ul className="space-y-2 text-left text-sm md:text-base text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 mr-3">
                1
              </span>
              You'll receive a confirmation email with your order details.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 mr-3">
                2
              </span>
              Our team will carefully package your items within 1-2 business days.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 mr-3">
                3
              </span>
              We'll send you a shipping notification with tracking information when your order ships.
            </li>
          </ul>
        </div>

        {/* Button */}
        <button className="bg-[#7c8c7d] hover:bg-white text-[#7c8c7d] font-semibold py-2 px-5 rounded transition duration-200">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
