import { ArrowBigRight } from "lucide-react";
const Opportunities = () => {
  return (
    <div className="bg-gray-100 pb-24">
      <div className="flex flex-col justify-center text-center px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl md:text-5xl sm:text-4xl mt-14 font-bold">
          Explore <i className="text-pink-600">Opportunities</i>
        </h2>
        <div className="mt-10 mb-10 border border-black flex flex-row w-full  lg:w-1/4 mx-auto justify-between rounded-full p-2">
          <button className="px-4 py-3 bg-pink-600 rounded-full text-white m-2 sm:m-0 sm:mr-2 border border-black font-mono text-lg">
            Opportunities
          </button>
          <button className="px-4 py-3 font-mono text-lg m-2 sm:m-0 sm:ml-2">
            Workshops
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-4/5 mx-auto">
        {/* Card 1 */}
        <div className="bg-white w-full sm:w-[45%] md:w-[30%] rounded-lg p-5 flex flex-col">
          <img
            src=".././images/carousel3.jpg"
            alt=""
            className="rounded-lg mb-4 w-full h-auto"
          />
          <p className="mt-1 font-semibold text-gray-700">
            19th Aug'25th - 15th Sep'25
          </p>
          <h4 className="text-lg font-semibold">
            Capgemini Reflexion Season 8
          </h4>
          <p className="text-gray-600 font-medium text-sm mt-1">
            Hosted By: Capgemini
          </p>
          <div className="flex justify-between gap-4 mt-14">
            <button className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2">
              Explore <ArrowBigRight />
            </button>
            <button className="bg-pink-400 border border-pink-600 text-white px-4 py-2 rounded">
              Closed
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-full sm:w-[45%] md:w-[30%] rounded-lg p-5 flex flex-col">
          <img
            src=".././images/carousel4.jpg"
            alt=""
            className="rounded-lg mb-4 w-full h-auto"
          />
          <p className="mt-1 font-semibold text-gray-700">
            19th Aug'25th - 15th Sep'25
          </p>
          <h4 className="text-lg font-semibold">
            Capgemini Reflexion Season 8
          </h4>
          <p className="text-gray-600 font-medium text-sm mt-1">
            Hosted By: Capgemini
          </p>
          <div className="flex justify-between gap-4 mt-14">
            <button className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2">
              Explore <ArrowBigRight />
            </button>
            <button className="bg-pink-400 border border-pink-600 text-white px-4 py-2 rounded">
              Closed
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-full sm:w-[45%] md:w-[30%] rounded-lg p-5 flex flex-col">
          <img
            src=".././images/carousel1.png"
            alt=""
            className="rounded-lg mb-4 w-full h-auto"
          />
          <p className="mt-1 font-semibold text-gray-700">
            19th Aug'25th - 15th Sep'25
          </p>
          <h4 className="text-lg font-semibold">
            Capgemini Reflexion Season 8
          </h4>
          <p className="text-gray-600 font-medium text-sm mt-1">
            Hosted By: Capgemini
          </p>
          <div className="flex justify-between gap-4 mt-14">
            <button className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2">
              Explore <ArrowBigRight />
            </button>
            <button className="bg-pink-400 border border-pink-600 text-white px-4 py-2 rounded">
              Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Opportunities;
