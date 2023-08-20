async function greet() {

}

function post() {
    if (document.getElementById("shareButton").checked) {
        // console.log(document.getElementById("titleOfPost").value," : ", document.getElementById("contentOfPost").value, ".", " Sipping on some ", document.getElementById("beverage").value)
        window.alert("thanks for venting. you can view your vent at ")
    }
    else {
        // console.log("Not Checked")
        doneButton.innerHTML = "Thanks for venting. reloading page in 3 seconds..."
        setTimeout(deleteVent, 3000)
    }
}

function deleteVent() {
    location.reload();
}