import Image from "next/image";

const Stats = () => {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 my-4 mx-4 pb-3  overflow-hidden">
        {/* Cell 1 */}
        <div className="flex flex-col flex-grow px-4 py-2 w-[120px] rounded-md shadow-md bg-[#FFFFFF] ">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-[#08C11B] rounded-md flex justify-center items-center"> <Image src="/images/handIcon.svg" width={16} height={16}/></div>
            <button className="text-gray-400 hover:text-gray-600">
              
              <img src="/images/dots.svg" alt="Three Dots" className="h-3 w-3" />
            </button>
          </div>
          <p className="text-[11px] font-[500]">Income 2022</p>
          <p className="text-green-500 text-[11px] font-[400]">+67.45%</p>
          <p className="font-bold">98.9K</p>
        </div>
  
        {/* Cell 2 */}
        <div className="flex flex-col px-4 py-2 w-[120px] flex-grow rounded-md shadow-md bg-[#FFFFFF]">
          <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 bg-[#DF2E2E] rounded-md flex justify-center items-center"> <Image src="/images/incomeIcon.svg" width={16} height={16}/></div>
            <button className="text-gray-400 hover:text-gray-600">
           
              <img src="/images/dots.svg" alt="Three Dots" className="h-3 w-3" />
            </button>
          </div>
          <p className="text-[11px] font-[500]">Income 2022</p>
          <p className="text-green-500 text-[11px] font-[400]">+67.45%</p>
          <p className="font-bold">98.9K</p>
        </div>
  
        {/* Cell 3 */}
        <div className="flex flex-col px-4 py-2 w-[120px] flex-grow rounded-md shadow-md bg-[#FFFFFF]">
          <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 bg-[#CEB014] rounded-md flex justify-center items-center"> <Image src="/images/handIcon.svg" width={16} height={16}/></div>
            <button className="text-gray-400 hover:text-gray-600">
             
              <img src="/images/dots.svg" alt="Three Dots" className="h-3 w-3" />
            </button>
          </div>
          <p className="text-[11px] font-[500]">Income 2022</p>
          <p className="text-green-500 text-[11px] font-[400]">+67.45%</p>
          <p className="font-bold">98.9K</p>
        </div>
  
        {/* Cell 4 */}
        <div className="flex flex-col px-4 py-2 w-[120px] flex-grow rounded-md shadow-md bg-[#FFFFFF]">
          <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 bg-[#CE1991] rounded-md flex justify-center items-center"> <Image src="/images/incomeIcon.svg" width={16} height={16}/></div>
            <button className="text-gray-400 hover:text-gray-600">
              <img src="/images/dots.svg" alt="Three Dots" className="h-3 w-3" />
            </button>
          </div>
          <p className="text-[11px] font-[500]">Income 2022</p>
          <p className="text-green-500 text-[11px] font-[400]">+67.45%</p>
          <p className="font-bold">98.9K</p>
        </div>
      </div>
    );
  };
  
  export default Stats;
  