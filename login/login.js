var id;

function login() {
	var uname = $("#uname").val();
	var pwd = $("#pwd").val();
	
	if(uname && pwd) {
		
		$.ajax
		({
			type: "POST",
			url: "http://localhost:3000/loginTry",
			dataType: "json",
			ContentType: "application/json",			
			data: {uname, pwd}
		}).done(function(data) {
			if(data.id) {
				id = data.id;
				window.location.href = "http://localhost:3000/home/home.html";
			}
		});
		
		
	}
	else {
		window.alert("Fill in both inputs!");
	}
	
}

function register() {
	console.log($("#email").css("display"));
	if($("#email").css("display") == "none") {
		$("#email").css("display", "block");
	}
	
}