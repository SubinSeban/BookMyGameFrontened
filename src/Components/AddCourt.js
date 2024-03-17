
import Header from "./Header";
import { useRef, useState } from "react";
import CustomInPut from "./CustomInPut";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import addIcon from "../Assets/addIcon.svg"
import  AxiosInstance from "../Config/apicall";


const AddCourt = () => {

 
  const [courtData, setCourtData] = useState({});
  const fileInput = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const handleChange = (e) => {
    setCourtData({ ...courtData, [e.target.name]: e.target.value });
   
  };
  
  const handleInputFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      return file.type.startsWith('image/') || file.type.startsWith('video/');
    });
    setSelectedFiles((prevState) => [...prevState, ...validFiles]);
    
  };
  const handleAddIconClick = () => {
    fileInput.current.click();
  };
  const handleDescriptionChange = (e) => {
    setCourtData({ ...courtData, description: e });
  };
  const handleCreateCourt = () => {
    console.log(courtData)
    console.log(selectedFiles)
    // till now its perfect
    const formDatatoSend = new FormData();
     selectedFiles.forEach((file) =>{
        formDatatoSend.append ("files", file);
    });
    
    
    Object.entries(courtData).forEach(([key, value]) => {
      formDatatoSend.append(key, value);
     
    });
    console.log(formDatatoSend)
    
    AxiosInstance({
      url: "/admin/createnewcourt",
      method: "post",
      data: formDatatoSend,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("new court added successfully");
        // use toest here
       
      })
      .catch((err) => {
        console.log("something went wrong in send to backened ");
        // use toest here
      });
    
   }


  return (
    <div>
      <Header />
      <div className="justify-between  relative top-40 ">
        
          <h1 className="ml-10 mr-20">Add New Court</h1>
          <button className="my-8 p-4 ml-96 rounded-lg bg-black text-white justify-items-end" onClick={handleCreateCourt}>    { " " } Create</button>
          <button className="my-8 p-4 rounded-lg ml-20 bg-white text-black"> { " " }  Cancel</button>
          
        <div className="flex pl-16 flex-wrap ">
          
        <CustomInPut
           value= {courtData.name}
           name = {"name"} 
          
          type={"text"}
          placeholder={"name"}
          onChange={handleChange}
        />
        <CustomInPut
        value= {courtData.location}
        name = {"location"}
   
          type={"text"}
          placeholder={"location"}
          onChange={handleChange}
        />
        <CustomInPut
        value= {courtData.type}
        name = {"type"}
          
          type={"text"}
          placeholder={"Type"}
          onChange={handleChange}
        />
        <CustomInPut
         value= {courtData.addressLine1}
         name = {"addressLine1"}
         
          type={"text"}
          placeholder={"Address Line 1"}
          onChange={handleChange}
        />
        <CustomInPut
         value= {courtData.addressLine2}
         name = {"addressLine2"}
          
          type={"text"}
          placeholder={"Address Line 2"}
          onChange={handleChange}
        />
        
        <CustomInPut

        value= {courtData.addressLine3}
        name = {"addressLine3"}
          
          type={"text"}
          placeholder={"Address Line 3"}
          onChange={handleChange}
        />
        <CustomInPut
        value= {courtData.landMark}
        name = {"landMark"}
          
          type={"text"}
          placeholder={"Land Mark"}
          onChange={handleChange}
        />
        <CustomInPut
        value= {courtData.pincode}
        name = {"pin"}
          
          type={"number"}
          placeholder={"Pin Code"}
          onChange={handleChange}
        />
        <CustomInPut
       value= {courtData.contactNumber}
       name = {"contactNumber"}
          
          type={"number"}
          placeholder={"Contact Number"}
          onChange={handleChange}
        />
        </div>
        <div className=" flex flex-wrap gap-2 m-3"> 
        {selectedFiles.map((file, index) => (
              <div className=" mt-10  w-40 h-40">
              {file.type.startsWith("image/") && (
                <img src={URL.createObjectURL(file)} height={150} key={index} className=" w-40 h-40 object-fit overflow-hidden" />
              )}
              {file.type.startsWith("video/") && (
                <video src={URL.createObjectURL(file)} height={150} key={index} />
              )}
            //   </div>
          ))}
           
          
          <div className="mt-10  ">
            <input  style = {{display:'none'}} type="file" ref={fileInput} onChange={ handleInputFileChange} multiple accept= "image/*, video/*"/>
            <img className="" src={addIcon} alt="" width={"150px"} height={"150px"} onClick={handleAddIconClick}/>
            
            </div>
            </div>
        </div>
        <ReactQuill className=" relative top-40 mt-10 mb-28 mx-7" style={{height:'300px', width:'800px'}} value={courtData.description}   onChange={ handleDescriptionChange} />;
      </div>
   
  );
};
export default AddCourt;
// {selectedFiles.map((file, index)=>(
//   <div className=" mt-10  w-40 h-40">
  
//   {file.type.startsWith("image/") && ( <img src={URL.createObjectURL(file)} height={150} key={index} className=" w-40 h-40 object-fit overflow-hidden"/>)}
//   {file.type.startsWith("video/") && (<img src={URL.createObjectURL(file)} height={150} key={index} className=" w-40 h-40 object-fit overflow-hidden" />)}
//   </div>
//  ))}