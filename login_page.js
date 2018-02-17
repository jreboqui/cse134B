function onClickLogin(){
	var type = document.getElementById("type").value;
	var uname = document.getElementById("uname").value;
	var psw = document.getElementById("psw").value;

	if(type == "c"){
		for(var i = 0; i < allCompanies.length; i++){
			if(allCompanies[i].userName == uname && allCompanies[i].password == psw){
				localStorage.setItem("userType",type);
				localStorage.setItem("userId",allCompanies[i].id);
				alert("Sign in Successful!");
				window.location = "company.html";	
			}
		}
	}

	if(type == "s"){
		for(var i = 0; i < allCompanies.length; i++){
			if(allCompanies[i].userName == uname && allCompanies[i].password == psw){
				localStorage.setItem("userType",type);
				localStorage.setItem("userId",allCompanies[i].id);
				alert("Sign in Successful!");
				window.location = "profile.html";	
			}
		}
	}

	if(type == "t"){
		for(var i = 0; i < allCompanies.length; i++){
			if(allCompanies[i].userName == uname && allCompanies[i].password == psw){
				localStorage.setItem("userType",type);
				localStorage.setItem("userId",allCompanies[i].id);
				alert("Sign in Successful!");
				window.location = "profile.html";	
			}
		}
	}
}

function retrieveLocalData(){
	var retrivedCompanies = localStorage.getItem('allCompanies');
	retrivedCompanies = JSON.parse(retrivedCompanies);
	allCompanies = retrivedCompanies;
	console.log(allCompanies);
}

window.onload = function() {
		retrieveLocalData();
		var retrivedCompanies = localStorage.getItem('allCompanies');
		retrivedCompanies = JSON.parse(retrivedCompanies);
		allCompanies = retrivedCompanies;
		console.log(allCompanies);
}