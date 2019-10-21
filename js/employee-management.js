/*eslint-env browser*/
var submit = document.getElementById("submit");

var persons = [
		["Sally Sharma", "SDE I", 1],
		["John Doe", "SDE II", 22],
		["Mike Koli", "SDE III", 333],
		["Ashley Gupta", "SDE IV", 4444],
		["Kevin Pandurang", "SDE V", 55555],
]

function loadEmp() {
	var html = ""
	for (let i = 0; i < persons.length; i++) {
		const person = persons[i];
		html += '<tr><td>' + person[0] + '</td><td>' + person[1] + '</td><td>' + person[2] + '</td><td><button class="del-btn" onclick="del(' + i + ')">Delete</button></td></tr>';
	}
	document.querySelector("tbody").innerHTML = html;

	document.getElementById("count").innerHTML = persons.length;
}

function del(n) {
	persons.splice(n, 1);
	loadEmp();
}

submit.addEventListener("click", function () {
	const name = document.getElementById("name").value;
	const title = document.getElementById("title").value;
	const ext = document.getElementById("extension").value;
	
	if(!name) document.querySelector("#name + small").style.display = "inline-block";
	else document.querySelector("#name + small").style.display = "none";
	
	if(!title) document.querySelector("#title + small").style.display = "inline-block";
	else document.querySelector("#title + small").style.display = "none";
	
	if(!ext) document.querySelector("#extension + small").style.display = "inline-block";
	else document.querySelector("#extension + small").style.display = "none";

	if (!(name && title && ext)) return;
	
	persons.push([name, title, ext]);

	loadEmp();
});

window.onload = function () {
	loadEmp();
}