import React from "react";

const Project = () => {
  return (
    <div className=" w-full p-6 lg:px-6" id="rentas_destacadas">
    <p className="text-3xl text-primary font-semibold pb-6 mt-6">
      Rentas Destacadas
    </p>
    <div className="w-full h-full flex flex-col space-y-6 items-center justify-center ">
      

      <div className="lg:flex lg:h-full lg:w-full lg:space-x-4 ">
      <div className="    rounded-xl mb-8 lg:bg-center">
        <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
             
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-slate-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  shadow-md overflow-hidden md:max-w-2xl">
          <a href="#">
            <img
              className="rounded-t-lg w-full "
              src="https://res.cloudinary.com/cpandares/image/upload/v1660077008/samples/seattle_kwukrc.jpg"
              alt
            />
          </a>
         
        </div>

      </div>
    </div>
  </div>
  );
};

export default Project;
