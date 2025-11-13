// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")

// Add event listener
button.addEventListener("click", Alta viata)

// Define function 
function Alta viata(){
	nume.innerHTML = "Software ingineer"
	prenume.innerHTML = "Microsoft"

	educatie.innerHTML = "Educatie"
	asteptari.innerHTML = "Astepatri

	img.src = "images/Doue.jpg"
	img.style.opacity = "70%"
	img.style.width = "200px"
	img.style.height = "300px"
	img.style.border = "3px solid black"

	body.style.color = "blue"
	body.style.fontFamily = "Montserrat"



}

