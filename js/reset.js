document.getElementById("resetbtn").onclick = () => {

    const email = document.getElementById("email").value;

    firebase.auth().sendPasswordResetEmail(email).then(() => {

    }).catch((error) => {

      var errorMessage = error.message;
      alert(errorMessage)

    });
}