function login() {
	var uname = $("#uname").val();
	var pwd = $("#pwd").val();
	
	if(uname && pwd) {
		var registered = true;
		
		$.ajax
		({
			type: "POST",
			url: "http://localhost:3000/loginTry",
			dataType: "json",
			ContentType: "application/json",			
			data: {uname, pwd},
			success: function(data) {console.log(data);}
		});
		
		if(registered) {
			loadIndex();
		}
		
	}
	else {
		window.alert("Fill in both inputs!");
	}
	
}

function loadIndex() {
	console.log("logged in!");
}