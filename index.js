async function greet() {

}

function postCheck() {
    if (document.getElementById("shareButton").checked) {
        console.log("Checked")
    }
    else {
        console.log("Not Checked")
        location.reload();
    }
}

function deleteVent() {
    location.reload();
}