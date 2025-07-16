import React from 'react'

function ContactInfo() {
    return (
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-[#7c8c7d] text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Address</strong>
              <p>32 Deeks Road, The Orchards, Akasia, Pretoria, 0201</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>083 359 0897</p>
              <p>086 236 0035</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>sales@nosweleexpress.co.za</p>
              <p>info@nosweleexpress.co.za</p>
            </div>
          </div>
        </div>
      );
    }
    
export default ContactInfo;


  