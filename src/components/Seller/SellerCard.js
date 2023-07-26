import Image from "next/image";
import { useState } from "react";

const SellerCard = ({ seller }) => {
  const [showActions, setShowActions] = useState(false);

  const handleActionsToggle = () => {
    setShowActions(!showActions);
  };

  const handleEdit = () => {
    // Handle edit action
  };

  const handleDelete = () => {
    // Handle delete action
  };

  return (
    <div className="shadow-lg rounded-md p-4 border border-[#F9F9F9]">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-90 h-90 rounded-md overflow-hidden">
            <Image src={seller.image} width={110} height={110} alt={seller.name} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{seller.name}</p>
            <p className="text-sm">{seller.address}</p>
            <p className="text-sm my-2">{seller.phone}</p>
            <p className="text-sm  mb-2">{seller.email}</p>
        <div className="flex flex-col justify-center space-x-1">
        <p className="font-[600] text-[18px]">Reviews</p>
        <div className="flex">
          {Array.from({ length: Number(seller.reviews) }).map((_, index) => (
            <Image
              key={index}
              src="/images/start.svg"
              width={15}
              height={15}
              alt="Star"
            />
          ))}
          </div>
        </div>
        
          </div>
        </div>
           <div className="">
        <h2 className="text-lg font-semibold">Statistics</h2>
        <div className="flex items-center space-x-2">
          <div
            className="w-[58px] h-[50px] bg-[#0852C1] rounded-md flex items-center justify-center"
          >
            <Image
              src="/images/newOrders.svg"
              width={30}
              height={30}
              alt="User Orders"
            />
          </div>
          <div>
          <p className="font-[600] text-[18px]">{seller.statistics.newOrders} </p>
          <p className="font-[400] text-[16px]">User Orders</p>
          </div>
          
        </div>

         <div className="flex items-center space-x-2 mt-2">
          <div
            className="w-[58px] h-[50px] bg-[#EE54BA] rounded-md flex items-center justify-center"
          >
            <Image
              src="/images/income.svg"
              width={30}
              height={30}
              alt="User Orders"
            />
          </div>
          <div>
          <p className="font-[600] text-[18px]">{seller.statistics.income} </p>
          <p className="font-[400] text-[16px]">Income</p>
          </div>
          
        </div>
      </div>
        <div className="relative">
          <button
            className="p-1 rounded-md hover:bg-gray-200"
            onClick={handleActionsToggle}
          >
            <Image
              src="/images/dots.svg"
              width={5}
              height={5}
              alt="More Actions"
            />
          </button>
          {showActions && (
            <div className="absolute right-0 top-10 w-32 bg-white border border-gray-300 rounded-md shadow-md">
              <button
                className="block w-full py-1 text-sm text-left px-4 hover:bg-gray-200"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="block w-full py-1 text-sm text-left px-4 hover:bg-gray-200"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
     
      
    </div>
  );
};

export default SellerCard;
