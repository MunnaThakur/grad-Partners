const Story = () => {
  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-center py-20 text-5xl font-bold">
        Our <i className="text-pink-600">Story</i>
      </h2>
      <div className="flex flex-wrap items-center justify-center space-x-8 mb-20">
        <div className="w-[29%] h-[225px] rounded-2xl border border-black flex flex-col items-center justify-center text-center hover:bg-orange-200 hover:text-white hover:scale-105">
          <div className="w-[100px] h-[100px] flex items-center justify-center mb-2 ease-in-out duration-300 transition">
            <img
              src=".././images/storyImages/download (10).png"
              alt="logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="text-lg font-semibold">100000+</p>
          <h5 className="text-2xl text-gray-700">Network Members</h5>
        </div>

        <div className="h-[225px] w-[29%] rounded-2xl border border-black flex flex-col items-center justify-center text-center hover:bg-yellow-200 hover:text-white">
          <div className="w-[100px] h-[100px] flex items-center justify-center mb-2">
            <img src=".././images/storyImages/download (3).png" alt="" className="max-w-full max-h-full object-contain"/>
          </div>
          <p className="text-lg font-semibold">100+</p>
          <h5 className="text-2xl text-gray-700">Workshops</h5>
        </div>
        <div className="h-[225px] w-[29%] rounded-2xl border border-black flex flex-col items-center justify-center text-center hover:bg-blue-300 hover:text-white">
          <div className="w-[100px] h-[100px] flex items-center justify-center mb-2">
            <img src=".././images/storyImages/download (2).png" alt="" className="max-w-[80%] max-h-[80%] object-contain"/>
          </div>
          <p className="text-lg font-semibold">100+</p>
          <h5 className="text-2xl text-gray-700">Institutes</h5>
        </div>
        <div className="h-[225px] w-[29%] rounded-2xl mt-8 border border-black flex flex-col items-center justify-center text-center hover:bg-purple-400 hover:text-white">
          <div className="w-[100px] h-[100px] flex items-center justify-center mb-2">
            <img src=".././images/storyImages/download.png" alt="" className="max-w-[80%] max-h-[80%] object-contain"/>
          </div>
          <p className="text-lg font-semibold">25000+</p>
          <h5 className="text-2xl text-gray-700">Mentees</h5>
        </div>
        <div className="h-[225px] w-[29%] rounded-2xl mt-8 border border-black flex flex-col items-center justify-center text-center hover:bg-orange-300 hover:text-white">
          <div className="w-[100px] h-[100px] flex items-center justify-center mb-2">
            <img src=".././images/storyImages/download (1).png" alt="" className="max-w-[80%] max-h-[80%] object-contain"/>
          </div>
          <p className="text-lg font-semibold">50000+</p>
          <h5 className="text-2xl text-gray-700">Subscribers</h5>
        </div>
      </div>
    </div>
  );
};

export default Story;
