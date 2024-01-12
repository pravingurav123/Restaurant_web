    function singu()
    {
     //full name   
    var fname= f1.fname.value;
    if(fname ==""){
        alert("Enter your name");
    }
   
       //username   
       var uname= f1.uname.value;
       if(uname ==""){
           alert("Enter username");
       }
   
       
          // email   
    var email= f1.email.value;
    if(email ==""){
        alert("Enter your email");
    }
   

       //phonenumber  
       var phonenumber= f1.phonenumber.value;
       if(phonenumber ==""){
           alert("Enter your phonenumber");
       }
   
       
          //password  //confirmPassword
    var password= f1.password.value;
    var confirmPassword= f1.confirmPassword.value;
    if(password ==""){
        alert("Enter your password");
    }
    if(confirmPassword ==""){
        alert("Enter your confirmPassword");
    }
    if(password!=confirmPassword){
        alert("password and confirmPassword not match");
        return false;
       }

   
   

}
