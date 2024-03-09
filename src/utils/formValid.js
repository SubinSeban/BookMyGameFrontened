export const checkValidData = (name, email, password) => {
    
    const isNameValid = /^[a-zA-Z\-\'\s]+$/.test(name);

 
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
    if(!isNameValid)return "enter name correctly"
       
    

    if(!isValidEmail)return "email is incorrect"
        
    
    if(!isValidPassword)return  "password is incorrect"

    return null;
}