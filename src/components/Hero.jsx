const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative grid place-items-start w-full rounded-2xl overflow-hidden">
        <img
          src="././images/mainbanner1.e525bd7b.png"
          alt="banner"
          className="mt-20 w-full object-cover col-start-1 row-start-1"
        />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-4 md:bottom-auto md:top-24 md:left-14 md:translate-x-0 flex space-x-3">
          <button className="bg-pink-600 text-white px-6 py-2  rounded-lg hover:bg-pink-700 transition">
            Students
          </button>
          <button className="border border-pink-600 text-pink-600 px-6 py-2 rounded-lg ">
            Corporates
          </button>
        </div>
      </div>
      {/* End hero section */}
    </div>
  );
};

export default Hero;
