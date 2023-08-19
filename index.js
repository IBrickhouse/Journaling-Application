async function greet() {

}

function post() {
    if (document.getElementById("shareButton").checked) {
        console.log("Checked")
    }
    else {
        console.log("Not Checked")
        location.reload();
    }
}