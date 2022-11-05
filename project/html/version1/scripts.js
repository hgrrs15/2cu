window.onload = init();

function init() {
	console.log("yo");

	if (!sessionStorage.alreadyClicked) {
    		sessionStorage.alreadyClicked = 1;
	}
	else {
		return;
	}

	let normal_creds = [];
	let admin_creds = [];
	
	let login1 = ["Jose", "1234"];
	let login2 = ["Mahirah", "1234"];
	let login3 = ["Owen", "1234"];

	normal_creds.push(login1);
	normal_creds.push(login2);
	admin_creds.push(login3);

	sessionStorage.setItem('normal_creds',  JSON.stringify(normal_creds));
	sessionStorage.setItem('admin_creds',  JSON.stringify(admin_creds));
}

function login() {
	let normal_creds = JSON.parse(sessionStorage.getItem('normal_creds'));
	let admin_creds = JSON.parse(sessionStorage.getItem('admin_creds'));

	let user = get_login_username();
	let pass = get_login_password();

	for(let i=0; i<normal_creds.length; i++){
		if((normal_creds[i][0] == user) && (normal_creds[i][1] == pass)) {
			window.open("blank.html","_self");
			return;
		}
	}

	for(let i=0; i<admin_creds.length; i++){
		if((admin_creds[i][0] == user) && (admin_creds[i][1] == pass)) {
			window.open("blank.html","_self");
			return;
		}
	}

	alert("Incorrect Login. Please enter again.");
	return;
}

function sign_up() {
	let normal_creds = JSON.parse(sessionStorage.getItem('normal_creds'));

	console.log("yo1");

	let user = get_signup_username();
	let pass = get_signup_password();
	let pass1 = get_signup_password1();
	
	console.log("yo2");

	if(user == ""){
		alert("Please enter a username.");
		return;
	}

	if(pass == ""){
		alert("Please enter a password");
		return;
	}

	if(pass != pass1){
		alert("Passwords do not match. Please reenter.");
		return;
	}

	for(let i=0; i<normal_creds.length; i++){
		if(normal_creds[i][0] == user) {
			alert("Username is taken. Please choose a new one.");
			return;
		}
	}

	let login = [user, pass];
	normal_creds.push(login);
	sessionStorage.setItem('normal_creds', JSON.stringify(normal_creds));

	window.open("blank.html","_self");
	return;
}

function cancel() {
	window.open("login.html","_self");
}

function get_login_username() {
	return document.getElementById("username").value;
}
function get_login_password() {
	return document.getElementById("password").value;
}

function get_signup_username() {
	return document.getElementById("username").value;
}
function get_signup_password() {
	return document.getElementById("password").value;
}
function get_signup_password1() {
	return document.getElementById("password1").value;
}