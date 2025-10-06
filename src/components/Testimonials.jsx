import { Quote } from "lucide-react";
const Testimonials = () => {
  return (
    <div className="relative bg-white mt-12">
      <div className="flex flex-col justify-center text-center mb-16">
        <h1 className="text-4xl text-pink-600 font-bold my-4">Testimonials</h1>
        <p className="text-gray-500 font-light tracking-wider">
          Read what our talented community members are saying about us
        </p>
      </div>
      <div className="w-4/5 mx-auto bg-gray-100 h-[53vh] p-4 rounded-lg mr-12 flex-col sm:flex-col">
        <div className="pt-15">
          <Quote className="text-pink-600 transform rotate-180 ml-28 w-24 h-16 " />
          <p className="text-gray-600 text-base ml-36 text-justify mr-6 mt-3 leading-none">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            recusandae cumque sequi placeat accusantium consequuntur magni rerum
            porro exercitationem ullam dicta, veritatis cupiditate autem dolores
            beatae debitis distinctio at aliquid fuga suscipit iusto numquam
            alias voluptatem nisi? Quibusdam nam at perferendis ipsa
            reprehenderit natus eligendi. Ipsum quis vel rerum laboriosam,
            minima amet exercitationem consectetur laborum voluptatum odit
            praesentium numquam enim possimus vero beatae eius saepe fugit? Quae
            nihil voluptas hic repellendus, vel corrupti modi accusantium.
            Expedita fugiat fuga quisquam, rem laboriosam placeat voluptatum!
            Esse minus nisi qui excepturi ipsam odio eaque sed mollitia aliquam,
            sit quisquam quis? Libero est suscipit accusamus nobis nisi culpa
            consequuntur officiis distinctio similique laborum, doloremque
            delectus tenetur dolore voluptates officia provident ciis minus
            eligendi quibusdam voluptatum sit quo reiciendis enim repellat animi
            iure.
          </p>
          <Quote className="text-pink-600 float-right w-24 h-16" />
        </div>
        <div className="absolute bottom-5 left-28">
          <div className="h-60 overflow-hidder overflow-hidden">
            <img
              src=".././images/testo/karan_gauba.e5661332.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="absolute bg-pink-700 left-20 bottom-7">
          <div className="bg-gray-100 ml-1 mb-1 border border-black flex flex-col justify-center text-center shadow-[0_4px_6px_0_rgba(236,72,153,0.5)]  rounded-2xl">
            <h3 className="font-mono text-lg font-black">Karan Gauba</h3>
            <p className="text-sm mx-5">International Runner Up, L'Oreal Brandstorm</p>
            <p className="text-sm">2021, NMIMS Mumbai</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
