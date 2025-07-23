import React from 'react'

const OrderDetails = () => {
  return (
    <div className="w-full md:w-1/2  m-10 bg-gray-100 p-6 rounded-2xl shadow-md">
     <h2 className="text-[#7c8c7d] text-xl font-semibold mb-4">Billing Details</h2>

    {/*Billing Form */}
     <form className="space-y-4" >
        {/*Name input field*/}
        <label className="text-gray-700 text-sm font-semibold mb-2"> 
            First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("First name", { required: true })}
        />

        {/*Surname input field*/}
        <label className="text-gray-700 text-sm font-semibold mb-2"> 
            Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("Last name", { required: true })}
        />

        {/*Company Name input field*/}
        <label className="text-gray-700 text-sm font-semibold mb-2"> 
            Company Name
        </label>
        <input
          type="text"
          placeholder=" Company Name (optional)"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register(" Company name", { required: true })}
        />

        {/*Country/Region input field*/}
        <label className="text-gray-700 text-sm font-semibold mb-2"> 
            Country/Region
        </label>
        <input
          type="text"
          placeholder="Country name"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("counntry name", { required: true })}
        />

        {/*Phone Number */}
        <label className="text-gray-700 text-sm font-semibold mb-2">
         Phone Number
        </label>
        <input
          type="Number"
          placeholder="Province "
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("name", { required: true })}
        />

        {/*Phone Number */}
        <label className="text-gray-700 text-sm font-semibold mb-2">
         Email Address
        </label>
        <input
          type="Email Address"
          placeholder="Province "
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("name", { required: true })}
        />

        {/*Street address  input field*/}
        <label className="text-gray-800 text-sm font-semibold mb-2"> 
            Street address 
        </label>
        <input
          type="text"
          placeholder="House number and street name "
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("House number", { required: true })}
        />
        <input
          type="text"
          placeholder="Apartment, Suit, Unit etc. (optional)"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("Apartment", { required: true })}
        />

        {/*Town/City input field*/}
        <label className="text-gray-700 text-sm font-semibold mb-2">
            Town/City
        </label>

        {/*Province dropdown */}
        <label className="text-gray-700 text-sm font-semibold mb-2">
            Province 
        </label>

        <input
          type="text"
          placeholder="Province "
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("name", { required: true })}
        />

        {/*Zip code */}
        <label className="text-gray-700 text-sm font-semibold mb-2">
        Zip code
        </label>
        <input
          type="Number"
          placeholder="Province "
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("name", { required: true })}
        />

        {/*Additiona Notes  */}
        <label className="text-gray-700 text-sm font-semibold mb-2">
            Additional Notes
        </label>
        <textarea
          type="Text"
          placeholder="Notes about your order, e.g special delivery (optional) "
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
          //{...register("name", { required: true })}
        />
    </form>

    </div>
  )
}

export default OrderDetails
