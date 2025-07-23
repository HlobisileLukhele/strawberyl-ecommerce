import React, { useState } from 'react';

export default function TotalItems() {
  const [shipping, setShipping] = useState('flat');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('You must agree to the terms and conditions before placing an order.');
      return;
    }
    alert('Order placed successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4 text-sm md:text-base">
      <h2 className="text-xl font-semibold border-b pb-2">Your order</h2>

      <div className="border-b pb-2">
        <div className="flex justify-between">
          <span>CH24 Wishbone Chair × 2</span>
          <span>$662.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delphine Cane Velvet Accent Chair × 4</span>
          <span>$998.80</span>
        </div>
        <div className="flex justify-between font-medium pt-2">
          <span>Subtotal</span>
          <span>$1,660.80</span>
        </div>
      </div>

      <div className="border-b pb-2">
        <h3 className="font-medium mb-1">Shipping</h3>
        <div className="space-y-1">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="shipping"
              value="flat"
              checked={shipping === 'flat'}
              onChange={() => setShipping('flat')}
              className="accent-red-600"
            />
            <span>Flat rate: $15.00</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="shipping"
              value="pickup"
              checked={shipping === 'pickup'}
              onChange={() => setShipping('pickup')}
              className="accent-red-600"
            />
            <span>Local pickup</span>
          </label>
        </div>
      </div>

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>$1,675.80</span>
      </div>

      <div className="border-t pt-2 space-y-2">
        <label className="flex items-start space-x-2">
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={paymentMethod === 'bank'}
            onChange={() => setPaymentMethod('bank')}
            className="accent-red-600 mt-1"
          />
          <span>
            <span className="font-medium">Direct bank transfer</span><br />
            <span className="text-sm text-gray-600">
              Make your payment directly into our bank account. Use your Order ID as the payment reference.
              Your order will not be shipped until the funds have cleared in our account.
            </span>
          </span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value="check"
            checked={paymentMethod === 'check'}
            onChange={() => setPaymentMethod('check')}
            className="accent-red-600"
          />
          <span>Check payments</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={() => setPaymentMethod('cod')}
            className="accent-red-600"
          />
          <span>Cash on delivery</span>
        </label>
      </div>

      <p className="text-xs text-gray-600">
        Your personal data will be used to process your order, support your experience throughout this website,
        and for other purposes described in our{' '}
        <a href="#" className="text-red-600 underline">privacy policy</a>.
      </p>

      <label className="flex items-start space-x-2">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="accent-red-600 mt-1"
        />
        <span>
          I have read and agree to the website{' '}
          <a href="#" className="text-red-600 underline">terms and conditions</a>
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-semibold transition"
      >
        Place order
      </button>
    </form>
  );
}
