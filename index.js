// Add your code here
function submitData(userName,userEmail){
    const data = {
        name: userName,
        email: userEmail
    }

    const configurationObject ={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify(data)
        }
    let myFetch = fetch("http://localhost:3000/users", configurationObject)        
        .then(myFetch => myFetch.json())         
        .then(object => {const id = object["id"];
        const body = document.querySelector("body");
        body.innerHTML = id;
        console.log(body)
        
    })


    .catch(function(error){
        let message = "Unauthorized Access"
        alert(message);
        document.body.innerHTML= message
    })
    return myFetch;
}
submitData("Steve", "steve@steve.com")


