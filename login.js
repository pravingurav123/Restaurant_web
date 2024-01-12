
function login()
{
	//For email
	let email=document.getElementById("email").value;
	if(email=="")
	{
		document.getElementById("emailmsg").innerHTML="Please Enter Email..!"; 
    document.getElementById("email").style.border="2px solid red";
		return false;
	}
	else
	{
		document.getElementById("emailmsg").innerHTML=""; 
    document.getElementById("email").style.border="2px solid green"
	}

  //for password
  let pass=document.getElementById("pass").value;
  if(pass=="")
  {
    document.getElementById("passmsg").innerHTML="Please Enter Password..!";
    document.getElementById("pass").style.border="2px solid red";
    return false;
  }
  else{
    document.getElementById("passmsg").innerHTML="";
    document.getElementById("pass").style.border="2px solid green";

  }

  if(pass.length<4){
    document.getElementById("passmsg").innerHTML="Please enter atleast 4 value";
    document.getElementById("pass").style.border="2px solid red";
    return false;
  }
  else{
    document.getElementById("passmsg").innerHTML="";
    document.getElementById("pass").style.border="2px solid green";
  }
}
