
/* Ensures inquiry field is not empty and alerts user if it is */
function inquiryCheck(){
var subject = document.getElementById("subject");

    if(subject.value.trim() == ""){
      alert("Please fill in your Inquiry")
        return false;
     }else{
         return true;
}
}
























/* function formSubmit(){
    if(fullname.lenght > 0 ) {
        document.getElementById("formStatus").innerHTML=("Inquiry submitted!");
        console.log('hi guys');
    }else {
        document.getElementById("formStatus").innerHTML=("Incorrect input");
        console.log('na guys');
    }
    
} */