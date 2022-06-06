document.getElementById("logIn").onclick = ()=>{
    let emailLogIn = document.getElementById("emailLog").value;
    let passwordLogIn = document.getElementById("passwordLog").value;
    document.getElementById("rightSide").reset();

    firebase.auth().signInWithEmailAndPassword(emailLogIn,passwordLogIn)
    .then((userCredentials)=> {
        let user = userCredentials.user;
        let uid = user.uid;
        alert("Welcome!")
        window.location.href = "home.html"
        
    }).catch((error)=> {
        console.log(error.message)
    })

    
    
}