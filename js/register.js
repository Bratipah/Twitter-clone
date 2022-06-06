
document.getElementById("signUp").onclick = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredentials)=> {
        let user = userCredentials.user
        let uid = user.uid
        alert("Proceed to login")
        window.location.href = "index.html"
    }).catch((error)=> {
        console.log(error.message)
    })
}