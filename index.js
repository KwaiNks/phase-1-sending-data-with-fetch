// // Add your code here

function submitData(name,email){
    const bodyToAppenOnDOM = document.querySelector("body")
    const userCredentialsToBePosted = {
        name: `${name}`,
       email: `${email}`,
    }
  
         return fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
         },
         body: JSON.stringify(userCredentialsToBePosted),
        })
      .then(response => response.json())
      .then(dataReceivedAsResponse => {
        bodyToAppenOnDOM.textContent = dataReceivedAsResponse.id})
   .catch(errorReceivedFromData => {
         bodyToAppenOnDOM.textContent = errorReceivedFromData.message
   })
}
submitData("Nkansah","Nkansah@gmail.com")


// function userCredentialsToBePosted(userName, email) { 
//     const user = {
//        userName: "Richmond",
//        email: "richmond@richmondmond.com",
//     }
//        return user;
//    }

//  const dataConfigurations = {
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//         "Accept": "application/json",
//      },
//      body: JSON.stringify(userCredentialsToBePosted),
//    }

// function submitData(dataConfigurations){
   
//     return fetch('http://localhost:3000/users',dataConfigurations);
// }

//const formData = {
//     dogName: "Franklin",
//     dogBreed: "german Shepherd",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);
//   const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });