
import { Modal, Input, Button, Space } from 'antd';
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CategoryModal from '../../components/Categories/CategoryModal'
import { PlusOutlined } from '@ant-design/icons';
const Index = () => {
 
  const category=[{
    id: 1,
    name: 'Engine',
    subcategories: ['Subcat1', 'Subcat2']
  }]

  const [formattedDateTime, setFormattedDateTime] = useState("");
  const [showActions, setShowActions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const[Categories, setCategories] = useState(category)
  const [modifyCategoryName, setModifyCategoryName] = useState("");
  const [newCategory, setNewCategory] = useState("")
const [showModifyModal, setShowModifyModal] = useState(false);
  const [selectedCategId, setSelectedCategId] = useState(null);
  const [addNewCategModal, setAddNewCategModal] = useState(false)
  const actionsRef = useRef();
  const [subcategories, setSubcategories] = useState([""]);

  const handleActionsToggle = (categId) => {
    setSelectedCategId(categId);
    setShowActions(!showActions);
  };

  const handleDeleteConfirmation = () => {
    let name = category.filter((categ) => {
      if(selectedCategId === categ.id){
        return categ.name
      }
    })
    const updatedcateg = category.filter((categ) => categ.name !== name);
    const updated = category.filter((categ) => categ.name !== name);
    products = updated
    console.log(updatedcateg)
    setAllproducts(updatedcateg);
    setSelectedCategId(null)
    setShowDeleteModal(false);
  };

 

  const handleDelete = (categId) => {
    setSelectedCategId(categId);
    setShowActions(false);
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setSelectedCategId(null)
  };

  const handleModify = (categName) => {
    setModifyCategoryName(categName);
    setShowModifyModal(true);
  };

  const handleModifySubmit = () => {

      setCategories((prevCategories) =>
        prevCategories.map((categ) =>
          categ.name === modifyCategoryName ? { ...categ, name: modifyCategoryName } : categ
        )
      );
  
      setShowModifyModal(false);
      setModifyCategoryName("");
    }

    const handleAddSubmit = () => {

      console.log(newCategory)
       const lastCategoryId = Categories.length > 0 ? Categories[Categories.length - 1].id : 0;
    const newCategoryId = lastCategoryId + 1;

        const newCategory = {
          id: newCategoryId,
          name: newCategory,
          products: 0, 
        };

        setCategories((prevCategories) => [...prevCategories, newCategory]);

        console.log(newCategory)
        setAddNewCategModal(false);
        setNewCategory("");
  
    };
    
    const handleSubcategoryChange = (event, index) => {
      const newSubcategories = [...subcategories];
      newSubcategories[index] = event.target.value;
      setSubcategories(newSubcategories);
    };
  
    // Function to add a new subcategory input field
    const handleAddSubcategory = () => {
      setSubcategories([...subcategories, ""]);
    };
    
  


  // useEffect(() => {

  //   const handleOutsideClick = (event) => {
  //     if (!actionsRef.current.contains(event.target)) {
  //       setShowActions(false);
  //     }
  //   };

  
  //   document.body.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  useEffect(() => {
    const currentDateAndTime = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    const newFormattedDateTime = currentDateAndTime.toLocaleString("en-US", options);
    setFormattedDateTime(newFormattedDateTime.replace(" at", ""));
  }, []);
 
 
  

  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Categories</title>
      </Head>
      <div className="h-full w-full my-4">
        <div className="hidden md:flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[24px] font-[600]">Categories</h1>
          </div>
          <div className="items-center hidden md:flex">
            <div className="flex mr-3">
              <p className="text-xs mr-2">Data Refreshed</p>
              <Image
                src="/images/refresh.svg"
                width={15}
                height={15}
                alt="Refresh Icon"
              />
            </div>
            <div className="bg-[#F0F5FB] border rounded-md border-[#0852C12B] px-3 py-3 text-xs font-medium">
              <p>{formattedDateTime}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mx-[2rem] my-4 ">
        {/* First div with two buttons */}
        <div className="flex">
          <button className="bg-[#0852C1] text-white text-xs md:text-base font-medium px-4 py-2 rounded-md mr-2 flex flex-row-reverse items-center transition-colors duration-300 hover:bg-[#0E71EB]" onClick={() => setAddNewCategModal(true)}>
            <Image
              src="/images/addProduct.svg"
              width={16}
              height={16}
              alt="Add Product"
              className="ml-2"
            />
            Add New Category
          </button>
        </div>

        {/* Second div with search bar */}
        <div className="flex items-center my-3 sm:my-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2  pl-2 pr-4 rounded-md bg-[#EBEFF6] border border-[#0852C12B] text-black text-base focus:outline-none transition-all duration-300"
            />
            <Image
              src="/images/searchIcon.svg"
              width={16}
              height={16}
              alt="Search"
              className="absolute right-3 top-3"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between items-center px-4 ">
        <div className="flex flex-col sm:flex-row text-sm  md:text-[16px] mx-4">
          <div className="flex">
          <p className="mr-2">Total Categories:</p>{" "}
          <p>{category.length}</p>
          </div>
        </div>
      </div>
      <div>
        {/* Table */}
        <div className="w-full overflow-x-auto px-4 py-4">
          <table className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
            {/* Table headers */}
            <thead className="rounded-lg shadow-md my-3 ">
              <tr className="text-[#0852C1] rounded-lg shadow-md bg-[#FFFFFF] text-left text-xs md:text-base px-4 py-4">
                <th className="text-center">#</th>
                <th className="px-3 py-6 text-center">Category</th>
                <th className=" px-3 py-4 mx-2 text-center">Subcategories</th>
                <th className=" px-3 py-4 mx-2 text-center">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {category.map((categ) => (
                <tr
                  key={categ.id}
                  className={` text-xs hover:bg-blue-100 py-4  ${
                    categ.id % 2 === 0
                      ? "bg-white shadow-md my-4 hover:bg-blue-100"
                      : "hover:bg-blue-200"
                  }`}
                >
                  {/* Checkbox column */}
                  <td className="text-center">
                    {categ.id}
                    </td>
                  <td className="font-[500] p-6 text-xs md:text-base">
                    <div className="flex items-center text-center justify-center">
                     
                      {categ.name}
                    </div>
                  </td>
                  <td className="text-[#777777] font-[500] md:text-[14px] text-xs text-center">
                    {categ.subcategories.map((subcat, index) => (
                      <div key={index} classnName="pt-2">{subcat}</div>
                    ))}
                  </td>
                 
                  <td className="flex justify-center items-center">
                    <button className="flex items-center w-60px my-5" onClick={() => handleModify(categ.name) } >
                      <Image
                        src="/images/edit.svg"
                        width={16}
                        height={16}
                        alt="Edit"
                      />
                    </button>
                    <div className="relative md:block" ref={actionsRef}>
                      <button
                        className="p-1 rounded-md hover:bg-gray-200 ml-[2rem]"
                        onClick={() => handleActionsToggle(categ.id)}
                      >
                        <Image
                          src="/images/more.svg"
                          width={3}
                          height={3}
                          alt="More Actions"
                        />
                      </button>
                      {showActions && selectedCategId === categ.id && (
                        <div
                          className="absolute right-0 top-[-20]  w-32 bg-white rounded-md shadow-lg overflow-hidden border " 
                          style={{ border: "1px solid #E5E7EB" }}
                        >
                          <button
                            className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-red-600 text-white overflow-hidden"
                            style={{ backgroundColor: "#F73B3F" }}
                            onClick={() => handleDelete(categ.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addNewCategModal && (
      <Modal
      title="Add a new Category"
      visible={addNewCategModal}
      onCancel={() => {
        setAddNewCategModal(false);
        setNewCategory("");
        setSubcategories([""]); 
      }}
      footer={[
        <Button key="cancel" onClick={() => {
          setAddNewCategModal(false);
          setSubcategories([""]);
          }}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          style={{ background: "#4096FF" }}
          onClick={handleAddSubmit}
          disabled={newCategory.trim() === ""}
        >
          Save
        </Button>,
      ]}
    >
      <form className="my-4" onSubmit={handleAddSubmit}>
        <label className="font-semibold">Category Name:</label>
        <Input
          type="text"
          className="border p-2 rounded-md w-full"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          required
        />
    
        {/* Subcategory inputs */}
        <div className="flex flex-col">
        <label className="font-semibold mt-4">Subcategories:</label>
        <Space direction="vertical">
          {subcategories.map((subcat, index) => (
            <Input
              key={index}
              className="border p-2 rounded-md "
              value={subcat}
              onChange={(e) => handleSubcategoryChange(e, index)}
              required
            />
          ))}
        </Space>
        </div>
        
    
        <Button
          type="dashed"
          className="mt-2 flex items-center"
          icon={<PlusOutlined />}
          onClick={handleAddSubcategory}
        >
          Add a subcategory
        </Button>
      </form>
    </Modal>
    
      )}
      {showModifyModal && (
  <Modal
    title="Modify Category"
    visible={showModifyModal}
    onCancel={() => {
      setShowModifyModal(false);
      setSelectedCategId(null);
      setModifyCategoryName("");
    }}
    footer={[
      <Button key="cancel" onClick={() => setShowModifyModal(false)}>
        Cancel
      </Button>,
      <Button
        key="submit"
        type="primary"
        style={{background: "#4096FF"}}
        onClick={handleModifySubmit}
        disabled={modifyCategoryName.trim() === "" }
      >
        Save
      </Button>,
    ]}
  >
    <div className="my-4">
      <label className="font-semibold">Category Name:</label>
      <input
        type="text"
        className="border p-2 rounded-md w-full"
        value={modifyCategoryName}
        onChange={(e) => setModifyCategoryName(e.target.value)}
        required
      />
    </div>
  </Modal>
)}

        <Modal
  title="Delete Seller"
  visible={showDeleteModal}
  onCancel={handleDeleteCancel}
  footer={[
    <Button
      key="cancel"
      className="btn-cancel"
      onClick={handleDeleteCancel}
    >
      No
    </Button>,
    <Button
      key="delete"
      className="btn-delete"
      type="primary"
      style={{ backgroundColor: '#F73B3F', borderColor: '#F73B3F' }}
      onClick={handleDeleteConfirmation}
    >
      Yes
    </Button>,
  ]}
>
  <p>Do you want to delete this seller?</p>
</Modal>

    </div>
  );
};

export default Index;

