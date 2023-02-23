function validate(){

  var ename = document.getElementById(name);
  var eemail = document.getElementById(email);
  var phoneNo = document.getElementById(phone);
  var esubject = document.getElementById(subject);
  var emessage = document.getElementById(message);

 if(ename.value =="" || eemail.value =="" || phoneNo.value =="" || esubject.value || emessage.value ==""){
   
  alert("Please fill the form properly")
 
 }else{
   alert("validation successfull")
 }


}

