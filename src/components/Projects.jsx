import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="recomendadas" className="p-6">
      {/* cards */}
      <p className="text-3xl font-semibold text-primary">Recomendadas</p>
      <div className="flex w-auto h-96 items-center mt-6 overflow-x-auto overscroll-x-auto space-x-4 scrollbar-hide overflow-y-hidden">
        

        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to="/project/1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/cpandares/image/upload/v1660077008/samples/seattle_kwukrc.jpg"
              alt
            />
          
        
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </Link>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/cpandares/image/upload/v1660077008/samples/seattle_kwukrc.jpg"
              alt
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/cpandares/image/upload/v1660077008/samples/seattle_kwukrc.jpg"
              alt
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/cpandares/image/upload/v1660077008/samples/seattle_kwukrc.jpg"
              alt
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/cpandares/image/upload/v1660077008/samples/seattle_kwukrc.jpg"
              alt
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
