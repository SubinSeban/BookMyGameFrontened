import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header =()=>{
  const navigate = useNavigate()
  const  user   = useSelector((store)=>store.user)
  const handleAddCourt=()=>{
    navigate('/AddCourt')
  }
  
    return(
        <div className="w-screen absolute z-10 px-8 py-2 bg-gradient-to-b from-black  ">
      <div className="flex justify-between">
     <h1 className=" w-44 text-green-500  "><i>BookMyGame</i></h1>

    { user.role===1 && <button className="bg-green-300   m-8 p-4 rounded-lg" onClick={handleAddCourt}><i >Add Courts</i></button>}
     <button className="bg-red-200   my-8 p-4 rounded-lg">(SignOut)</button>
     <h1 className=" w-44 text-white-500  "><i>{user.name}</i></h1>
     <Dropdown/>
     </div>
        </div>
      )}
   export default Header;
    
