
/* Show and Hide Div start */

var el = document.getElementById('signUpClick');
el.onclick = opensignUp;

function opensignUp() {
	if (document.getElementById('signUp')) {

		if (document.getElementById('signUp').style.display == 'none') {
			document.getElementById('signUp').style.display = 'block';
			document.getElementById('logIn').style.display = 'none';
		}
		else {
			document.getElementById('logIn').style.display = 'none';
		}
	}
}

var el = document.getElementById('ligInClick');
el.onclick = openlogIn;

function openlogIn() {
	if (document.getElementById('logIn')) {

		if (document.getElementById('logIn').style.display == 'none') {
			document.getElementById('logIn').style.display = 'block';
			document.getElementById('signUp').style.display = 'none';
		}
		else {
			document.getElementById('logIn').style.display = 'none';
			document.getElementById('logIn').style.display = 'block';
		}
	}
}

function backsignup() {
	if (document.getElementById('signUp')) {
		document.getElementById('signUp').style.display = 'none';         
	}
}

function backlogin() {
	if (document.getElementById('logIn')) {
		document.getElementById('logIn').style.display = 'none';         
	}
}

/* Show and Hide Div End */

// Logout function

function logout(){
	window.location.href = "index.html";
}

// Validate Form

function validateForm() {
    
	var x = document.forms["myForm"]["email"].value;
	var y = document.forms["myForm"]["password"].value;
    
	var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		document.getElementById("emailError").innerHTML = "Please enter a valid e-mail address";
        return false;
    }
    else if (y == "") {
        document.getElementById("emailError").innerHTML = "Enter Password.";
	return false;
	}	
	else if( y == "Kaustabh"){
	    alert ("Login successfully");
	    // window.location = "home.html";
		document.forms["myForm"].setAttribute("action",value);
	return false;
	}
	else{
		document.getElementById("emailError").innerHTML = "Password invalid. Enter password = Kaustabh";
		return false;
	}
}

