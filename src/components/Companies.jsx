const Companies = () => {
  return (
    <div className="bg-gray-50 py-20 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8">
        Companies <span className="text-pink-600">associated</span> with us
      </h2>

      {/* Scrolling wrapper */}
      <div className="relative mt-16 w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12">
          {/* Repeat your logos */}
          <img src="././images/logo/download (1).png" className="h-16 object-contain" alt="Birla" />
          <img src="././images/logo/download (2).png" className="h-16 object-contain" alt="Schneider" />
          <img src="././images/logo/download (3).png" className="h-16 object-contain" alt="Bajaj" />
          <img src="././images/logo/download (4).png" className="h-16 object-contain" alt="Dr Reddys" />
          <img src="././images/logo/download (5).png" className="h-16 object-contain" alt="Aditya Birla" />
          <img src="././images/logo/download (6).png" className="h-16 object-contain" alt="Tata Steel" />
          <img src="././images/logo/download (7).png" className="h-16 object-contain" alt="CocaCola" />
          <img src="././images/logo/download (8).png" className="h-16 object-contain" alt="TVS" />
          <img src="././images/logo/download (9).png" className="h-16 object-contain" alt="TVS" />
          {/* Duplicate company logos */}
          
        </div>
      </div>
    </div>
  );
};

export default Companies;
