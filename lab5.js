//lab 5
//making reister person object
function register(){
let firstName=document.getElementById("firstName").value;
let lastName=document.getElementById("lastName").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let DOB=document.getElementById("DOB").value;
//check if all fields are inputted in
if(!firstName||!lastName||!email ||!password ||!DOB){
    alert("All fields must be filled");
    return;
}
//password requirements:
if(!(password.includes("!")||password.includes("?"))){
    alert("Password must contain ! or ?");
    return
}
//such good security:
let hideForSecurity="*".repeat(password.length);

//user object
let user={
    firstName:firstName,
    lastName:lastName,
    email: email,
    password: hideForSecurity,
    DOB: DOB
};
 document.getElementById("output").style.display="block";

   document.getElementById("outputFirst").innerText=user.firstName;
   document.getElementById("outputLast").innerText=user.lastName;
   document.getElementById("outputEmail").innerText=user.email;
   document.getElementById("outputPass").innerText=user.password;
   document.getElementById("outputDOB").innerText=user.DOB;

}