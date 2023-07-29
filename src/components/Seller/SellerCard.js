import Image from "next/image";
import { useState, useEffect, useRef } from "react";
const SellerCard = ({ seller, onOpenModal, onEditModal }) => {
  const [showActions, setShowActions] = useState(false);
  const actionsRef = useRef();

  const handleActionsToggle = () => {
    setShowActions(!showActions);
  };

  const handleEdit = (sellerId) => {
    onEditModal(sellerId)
    setShowActions(false);
  };

  const handleDelete = (sellerId) => {
    onOpenModal(sellerId);
    setShowActions(false);
  };

  const handleCloseActions = () => {
    setShowActions(false);
  };

  useEffect(() => {

    const handleOutsideClick = (event) => {
      if (!actionsRef.current.contains(event.target)) {
        setShowActions(false);
      }
    };

  
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  

  return (
    <div className="shadow-lg rounded-md p-4 border border-[#F9F9F9]">
      <div className="flex md:flex-row flex-col items-start md:justify-between overflow-hidden">
        <div className="flex items-start mditems-center space-x-4">
          <div className="md:w-90 md:h-90 rounded-md overflow-hidden">
            <Image src={seller.image} width={110} height={110} alt={seller.name} />
          </div>
          <div className="flex flex-col">
            <p className="md:text-lg text-base font-semibold">{seller.name}</p>
            <p className="text-sm">{seller.address}</p>
            <p className="text-sm my-2">{seller.phone}</p>
            <p className="text-sm  mb-2">{seller.email}</p>
        <div className="flex flex-col justify-center space-x-1">
        <p className="font-[600] md:text-[18px] text-base">Reviews</p>
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
        <div className="py-2 md:py-0">
        <h2 className="text-lg font-semibold hidden md:block">Statistics</h2>
        <div className="flex flex-row md:flex-col">
        <div className="flex  items-center space-x-2">
          <div
            className="w-[58px] h-[50px] bg-[#0852C1] rounded-md flex items-center justify-center py-3 px-3"
          >
            <Image
              src="/images/newOrders.svg"
              width={30}
              height={30}
              alt="User Orders"
            />
          </div>
          <div>
          <p className="font-[600] md:text-[18px] text-base">{seller.statistics.newOrders} </p>
          <p className="font-[400] md:text-[16px] text-sm">User Orders</p>
          </div>
          
        </div>

         <div className="flex items-center space-x-2 mt-2">
          <div
            className="md:w-[58px] md:h-[50px] h-[50px] w-[50px] bg-[#EE54BA] rounded-md flex items-center justify-center"
          >
            <Image
              src="/images/income.svg"
              width={30}
              height={30}
              alt="User Orders"
            />
          </div>
          <div>
          <p className="font-[600] md:text-[18px] text-base">{seller.statistics.income} </p>
          <p className="font-[400] md:text-[16px] text-sm">Income</p>
          </div>
          
        </div>
      </div>
      </div>
        <div className="relative hidden md:block" ref={actionsRef}>
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
            <div
              className="absolute right-0 top-10 w-32 bg-white rounded-md shadow-lg overflow-hidden " 
              style={{ border: "1px solid #E5E7EB" }}
            >
              <button
                className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-blue-500 overflow-hidden"
                onClick={() => handleEdit(seller.id)}
              >
                Edit
              </button>
              <button
                className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-red-600 text-white overflow-hidden"
                style={{ backgroundColor: "#F73B3F" }}
                onClick={() => handleDelete(seller.id)}
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
