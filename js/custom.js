const url = "https://randomuser.me/api/";
const btn = document.getElementById("btn");
let fullnameDisp = document.getElementById("fullname");
let avatar = document.getElementById("avatar");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");

btn.addEventListener("click", function(){
	fetch(url)
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(displayErrors)
});

function handleErrors(res){
	if(!res.ok){
		throw Error(res.status);
	}
	return res;
}

function parseJSON(res){
	console.log(res)
	return res.json().then(function(parsedData){
		return parsedData.results[0];
	});
}

function updateProfile(data){
	console.log(data);
	let fullname = data.name.first + " " + data.name.last;
	fullnameDisp.innerText = fullname;
	avatar.src = data.picture.medium;
	username.innerText = data.login.username;
	email.innerText = data.email;
	city.innerText = data.location.city;
}
function displayErrors(err){
	console.log("INSIDE displayErrors!");
	console.log(err);
}