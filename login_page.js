function onClickLogin() {
	    console.log(document.getElementById("userType"));
	    var type = document.getElementById("userType").value;
	    var uname = document.getElementById("uname").value;
	    var psw = document.getElementById("psw").value;
	    var valid = false;

	    if (type == "c") {
	        for (var i = 0; i < allCompanies.length; i++) {
	            console.log("i=" + i.toString());
	            if (allCompanies[i].username == uname && allCompanies[i].password == psw) {
	                localStorage.setItem("userType", type);
	                localStorage.setItem("userId", allCompanies[i].id);
	                alert("Sign in Successful!");
	                location.href = "company.html?companyId=" + allCompanies[i].id;
	                valid = true;
	            }
	        }
	    } else if (type == "s") {
	        for (var i = 0; i < allCompanies.length; i++) {
	            if (allStudents[i].username == uname && allStudents[i].password == psw) {
	                localStorage.setItem("userType", type);
	                localStorage.setItem("userId", allStudents[i].sid);
	                alert("Sign in Successful!");
	                location.href = "profile_page.html?studentId=" + allStudents[i].sid;
	                valid = true;
	            }
	        }
	    } else if (type == "t") {

	        for (var i = 0; i < allTutors.length; i++) {
	            if (allTutors[i].username == uname && allTutors[i].password == psw) {
	                localStorage.setItem("userType", type);
	                localStorage.setItem("userId", allTutors[i].tutorId);
	                alert("Sign in Successful!");
	                location.href = "profile_page.html?tutorId=" + allTutors[i].tutorId;
	                valid = true;
	            }
	        }
	    }

	    if (!valid) {
	        alert("Incorrect Username and Password combination!");
	    }

}

function retrieveLocalData(){
	var retrivedCompanies = localStorage.getItem('allCompanies');
	retrivedCompanies = JSON.parse(retrivedCompanies);
	allCompanies = retrivedCompanies;

	var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;

    var retrievedTutors = localStorage.getItem('allTutors');
    retrievedTutors = JSON.parse(retrievedTutors);
    allTutors = retrievedTutors;
}

window.onload = function() {
	retrieveLocalData();
}