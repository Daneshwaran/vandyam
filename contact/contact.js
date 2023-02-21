
var form = document.getElementById('form')

      form.addEventListener('submit',function(e){
        e.preventDefault()
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var mobileNumber = document.getElementById('mobileNumber').value
        var message = document.getElementById('message').value



        //fetch('https://jsonplaceholder.typicode.com/posts')
        fetch("https://app.vandyam.com/api/contactVandyam",{
          method: 'POST',
          headers:{
            "Content-type": "application/json",
            "Connection":"keep-alive",
            "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBkZDVmMmFiYjI1MWI1YzY3YzU2YSIsImlhdCI6MTY3Njg4MDA2MCwiZXhwIjoxNzYzMjgwMDYwfQ.E-QmcM81zcApyfxU8fLcTK0Bw9g9SyxjTR3mvWe8QRw',
        },
          body:JSON.stringify({
            name:name,
            email:email,
            mobileNumber:mobileNumber,
            message:message
          })
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
      });
