const Toast1 = {
  init() {
    this.hideTimeout = null;

    this.el = document.createElement("div");
    this.el.className = "toast1";
    document.body.appendChild(this.el);
  },

  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.el.textContent = message;
    this.el.className = "toast1 toast1--visible";

    if (state) {
      this.el.classList.add(`toast1--${state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toast1--visible");
    }, 3000);
  }
};

document.addEventListener("DOMContentLoaded", () => Toast1.init());

function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }


}

function validation(){
  clearErrors();
  formStatus = true;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  if(mobileNumber.length!=10)
  {
    document.getElementById("mobileNumberError").innerHTML="Please enter valid Mobile number";
    formStatus = false;
  }
  if(email==''){
    document.getElementById("emailError").innerHTML="Email cannot be empty";
    formStatus = false;
  }
  if(!name){
    document.getElementById("nameError").innerHTML="Name cannot be empty";
    formStatus = false;
  }
  return formStatus;
}


var form = document.getElementById('form')

      form.addEventListener('submit',function(e){
        e.preventDefault()
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var mobileNumber = document.getElementById('mobileNumber').value
        var message = document.getElementById('message').value



        if( validation()){
        fetch("https://app.vandyam.com/api/contactVandyam",{
          method: 'POST',
          headers:{
            "Content-type": "application/json",
            "Connection":"keep-alive",
            //"Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBkZDVmMmFiYjI1MWI1YzY3YzU2YSIsImlhdCI6MTY3Njg4MDA2MCwiZXhwIjoxNzYzMjgwMDYwfQ.E-QmcM81zcApyfxU8fLcTK0Bw9g9SyxjTR3mvWe8QRw',
        },
          body:JSON.stringify({
            name:name,
            email:email,
            mobileNumber:mobileNumber,
            message:message
          })
        }).then((response) => {
          if (response.status === 200){
            Toast1.show('Form Submitted Successfully','success');
            location.href = `https://www.vandyam.com/`
            return response.json();
          }else{
            Toast1.show('Something Went Wrong Kindly mail to office@vandyam.com','error')
          }
        })
        .then((json) => console.log(json));
      }
      });

