

import React from "react";

const Contact = () => {
  return (
    // <div
    //   className="min-h-screen flex items-center justify-center bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url('/path-to-your-background-image.jpg')`, // Replace with the correct image path
    //   }}
    // >
    //   <div className="bg-black bg-opacity-60 p-6 sm:p-12 rounded-lg max-w-4xl w-full text-white flex flex-col sm:flex-row justify-between items-center">
    //     {/* Contact Info Section */}
    //     <div className="space-y-6 text-center sm:text-left sm:w-1/2">
    //       <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          
    //       <div>
    //         <div className="flex items-center mb-4">
    //           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
    //             <i className="fas fa-home"></i>
    //           </div>
    //           <div className="ml-4">
    //             <h2 className="font-bold text-blue-600">Address</h2>
    //             <p className="">4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
    //           </div>
    //         </div>
    //         <div className="flex items-center mb-4">
    //           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
    //             <i className="fas fa-phone"></i>
    //           </div>
    //           <div className="ml-4">
    //             <h2 className="font-bold text-blue-600">Phone</h2>
    //             <p>571-457-2321</p>
    //           </div>
    //         </div>
    //         <div className="flex items-center">
    //           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
    //             <i className="fas fa-envelope"></i>
    //           </div>
    //           <div className="ml-4">
    //             <h2 className="font-bold text-blue-600">Email</h2>
    //             <p>ntamerrwael@mfano.ga</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Form Section */}
    //     <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg sm:w-1/2 w-full">
    //       <h2 className="text-xl font-bold mb-4">Send Message</h2>
    //       <form>
    //         <div className="mb-4">
    //           <input
    //             type="text"
    //             placeholder="Full Name"
    //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <input
    //             type="email"
    //             placeholder="Email"
    //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <textarea
    //             placeholder="Type your Message..."
    //             rows="4"
    //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           ></textarea>
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
    //         >
    //           Send
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-dark-blue bg-cover bg-center">
  <div className="bg-opacity-80 bg-sky-800 border-2 p-6 sm:p-12 rounded-lg max-w-4xl w-full text-white flex flex-col sm:flex-row justify-between items-center">
    {/* Contact Info Section */}
    <div className="space-y-6 text-center sm:text-left sm:w-1/2">
      <h1 className="text-3xl  text-black font-bold mb-2">Contact Us</h1>
      
      <div>
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
            <i className="fas fa-home"></i>
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-blue-900  text-black">Address</h2>
            <p className="text-black">4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
            <i className="fas fa-phone"></i>
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-red-400">Phone</h2>
            <p className="text-black">571-457-2321</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-red-400">Email</h2>
            <p className="text-black">ntamerrwael@mfano.ga</p>
          </div>
        </div>
      </div>
    </div>

    {/* Form Section */}
    <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg sm:w-1/2 w-full">
      <h2 className="text-xl font-bold mb-4">Send Message</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Type your Message..."
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contact;

  