let usersArray = ['akhil', 'gopi', 'ram'];
let psswordArray = 'mar';

function validateFunction() {
    var myUsername = document.getElementById("uname");
    console.log(myUsername.value)
    var myPassword = document.getElementById("pword");

    if (myUsername.value == "" || myPassword.value == "") {
        alert("no blank allowed")
        return false;
    } else if (checkUser(myUsername.value) && myPassword.value == psswordArray) {

        return true;
    } else {
        alert("you are not a valid user!!!!")
        myUsername.value = null;
        myPassword.value = null;

        return false;
    }
}

function checkUser(newuser) {

    console.log()
    for (let x of usersArray) {
        if (x == newuser) {
            return true;
        } else { return false; }
    }
}