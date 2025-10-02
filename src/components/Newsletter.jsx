// import { ArrowUpRight } from 'lucide-react';
// const Newsletter = ()=>{
//   return(
//     <div className="w-[80%] border-8 border-black bg-purple-700 flex justify-center text-center mx-auto mt-36 rounded-3xl h-[320px]">
//       <div className="mt-10 w-1/2">
//         <p className="text-white text-4xl font-bold text-start mb-10">Stay updated on our latest workshops & events with our newsletter</p>
//         <div class="flex items-center justify-between bg-purple-700 text-white p-1 border-b border-white w-[400px]">

//           <input 
//             type="email" 
//             placeholder="Enter your email" 
//             class="bg-transparent outline-none placeholder-white w-full text-2xl"
//           />
//           <ArrowUpRight size={36} />
//         </div>

//       </div>
//       <div className="flex justify-end">
//         <img src=".././images/newsletter.png" alt="" />
//       </div>
//     </div>
//   )
// }
// export default Newsletter;


import { ArrowUpRight } from "lucide-react"; // or your icon lib

export default function Newsletter() {
  return (
    <div className="w-full px-4 md:w-4/5 md:mx-auto border-4 md:border-8 border-black bg-purple-700 flex flex-col md:flex-row items-center md:items-start text-white mt-8 md:mt-36 rounded-3xl md:h-[320px]">
      
      {/* Left column (text + input) */}
      <div className="w-full md:w-1/2 px-2 md:px-8 mt-6 md:mt-10">
        <p className="text-2xl md:text-4xl font-bold text-start mb-6 md:mb-10">
          Stay updated on our latest workshops & events with our newsletter
        </p>

        {/* Input row: flexible (no fixed px width) */}
        <div className="flex items-center bg-purple-700 text-white py-1 border-b border-white w-full max-w-[640px]">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="bg-transparent outline-none placeholder-white w-full text-lg md:text-2xl py-2"
          />

          {/* Icon as a button; size controlled by Tailwind classes */}
          <button className="ml-2 p-2">
            <ArrowUpRight className="h-7 w-7 md:h-9 md:w-9" />
          </button>
        </div>
      </div>

      {/* Right column (image) */}
      <div className="w-full md:w-1/2 flex justify-end px-2 md:px-8 mt-6 md:mt-0">
        <img
          src=".././images/newsletter.png"
          alt="newsletter"
          className="w-40 md:w-60 lg:w-72 object-contain"
        />
      </div>
    </div>
  );
}
