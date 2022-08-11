import {DiReact,DiJavascript1,DiSymfony} from 'react-icons/di';
import {FaPhp, FaLaravel} from 'react-icons/fa';
import {SiTailwindcss, SiMysql,SiAngularjs,SiNodedotjs} from 'react-icons/si';

const Technologies = () => {
  return (
    <div className=" w-full p-6 lg:px-6">
      <p className="text-3xl text-primary font-semibold pb-6 mt-6 ">
        Tecnologias
      </p>
      <div className="flex flex-wrap justify-center space-x-10">
        <div className='stroke-cyan-500'>
            <DiReact size={150}/>
        </div>
        <div>
            <FaPhp size={150}/>
        </div>
        <div>
            <FaLaravel size={150}/>
        </div>
        <div>
            <SiTailwindcss size={150}/>
        </div>
        <div>
            <DiJavascript1 size={150}/>
        </div>
        <div>
            <SiMysql size={150}/>
        </div>
        <div>
            <DiSymfony size={150}/>
        </div>
        <div>
            <SiAngularjs size={150}/>
        </div>
        <div>
            <SiNodedotjs size={150}/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
