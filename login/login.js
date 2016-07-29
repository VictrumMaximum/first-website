function login() {
	var uname = $("#uname").val();
	var pwd = $("#pwd").val();
	
	var registered = true;
	
	if(registered) {
		loadIndex();
	}
}

function loadIndex() {
	console.log("logged in!");
}