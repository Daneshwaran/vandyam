const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const mobileNumber = document.getElementById("mobileNumber").value;
  const email = document.getElementById("email").value;
  const name = document.getElementById('name').value
  const message = document.getElementById('message').value

  // Validate mobile number
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid mobile number.");
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Post request using fetch
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
  })
    .then(function (response) {
      if (response.status === 200) {
        // Show success message using toast
        showToast("Request submitted successfully.");
      } else {
        alert("An error occurred while submitting the request.");
      }
    })
    .catch(function (error) {
      alert("An error occurred while submitting the request.");
    });
});

// Function to show toast message
function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.className = "toast";
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.remove();
  }, 3000);
}
