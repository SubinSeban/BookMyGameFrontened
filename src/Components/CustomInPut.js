const CustomInPut = ({type,name, placeholder, value, onChange})=>{
    return(
        <div >
        
        <input
           value= {value}
           name = { name }
          className="p-4 min-w-8  my-2 mx-6  bg-green-50 "
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          
        />
        
        
        </div>
    )
}
export default CustomInPut;