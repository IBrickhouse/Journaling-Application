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

var foodSelect = document.getElementById("food")

foodSelect.onchange = function foodSuggestion() {
    var foodChoice = document.getElementById("food").value;

    if (foodChoice == "no") {

        const noFood = document.createElement("p");
        noFood.innerHTML = "You should eat something. How about some toast?";
        document.getElementById("myFood").appendChild(noFood);
    }
    else {
        const whatFood = document.createElement("textarea")
        whatFood.className = 'form-control';
        //whatFood.setAttribute =("id", "snack")
        whatFood.innerHTML = "";
        document.getElementById("myFood").appendChild(whatFood);
        //console.log(document.getElementById("snack"))
    }
}

var drinkSelect = document.getElementById("drink")

drinkSelect.onchange = function drinkSuggestion() {
    var drinkChoice = document.getElementById("drink").value;

    if (drinkChoice == "no") {

        const noDrink = document.createElement("p");
        noDrink.innerHTML = "You should drink something. How about some tea?";
        document.getElementById("myDrink").appendChild(noDrink);
    }
    else {
        const whatDrink = document.createElement("textarea")
        whatDrink.className = 'form-control';
        //whatFood.setAttribute =("id", "snack")
        whatDrink.innerHTML = "";
        document.getElementById("myDrink").appendChild(whatDrink);
        //console.log(document.getElementById("snack"))
    }
}