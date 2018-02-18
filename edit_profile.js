var studentId;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function retrieveLocalData(){
  /*  var retrivedCompanies = localStorage.getItem('allCompanies');
    retrivedCompanies = JSON.parse(retrivedCompanies);
    allCompanies = retrivedCompanies;
    console.log("Printing all companies");
    console.log(allCompanies);*/

    var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;
    console.log("Printing all students");
    console.log(allStudents);
}

function populateForm() {
    for(var i = 0; i < allStudents.length; i++){
		if(this.allStudents[i].sid == studentId){
            document.getElementById("profileImg").src = allStudents[i].profilePic;
			document.getElementById("imgURL").value = allStudents[i].profilePic;
            document.getElementById("name").value = allStudents[i].name;
            document.getElementById("schoolname").value = allStudents[i].school;
            document.getElementById("year").value = allStudents[i].year;
            document.getElementById("major").value = allStudents[i].major;
            document.getElementById("minor").value = allStudents[i].minor;
            document.getElementById("status").value = allStudents[i].status;
            document.getElementById("gpa").value = allStudents[i].GPA;
            document.getElementById("internship").value = allStudents[i].intern;
         
		}
	}
    
}

function onClickReset(){
    document.getElementById("imgURL").reset();
    document.getElementById("name").reset(); 
    document.getElementById("schoolname").reset(); 
    document.getElementById("year").reset(); 
    document.getElementById("major").reset(); 
    document.getElementById("minor").reset(); 
    document.getElementById("status").reset(); 
    document.getElementById("gpa").reset(); 
    document.getElementById("intern").reset(); 
}

function onClickSave(){
    console.log("Updating Profile");
    console.log("studentId" + studentId);

    for(var i = 0; i < allStudents.length; i++){
		if(this.allStudents[i].sid == studentId){
			allStudents[i].profilePic = document.getElementById("imgURL").value;
            allStudents[i].name = document.getElementById("name").value; 
            allStudents[i].school = document.getElementById("schoolname").value; 
            allStudents[i].year = document.getElementById("year").value; 
            allStudents[i].major = document.getElementById("major").value; 
            allStudents[i].minor = document.getElementById("minor").value;
            allStudents[i].status = document.getElementById("status").value;
            allStudents[i].GPA = document.getElementById("gpa").value;
            allStudents[i].intern = document.getElementById("internship").value;
            break;
		}
	}
    
    console.log(allStudents);
    localStorage.setItem('allStudents',JSON.stringify(allStudents));
    location.href="profile_page.html" + "?studentId=" + studentId;
}

function onClickCancel(){
	window.history.back();
}

function previewImg(){
    var previewURL = document.getElementById("imgURL").value;
    document.getElementById("profileImg").src = previewURL;
}

function loadImg(){
    for(var i = 0; i < allStudents.length; i++){
		if(this.allStudents[i].sid == studentId){
            document.getElementById("profileImg").src = allStudents[i].profilePic;
            break;
        }
    }
}

window.onload = function() {
    retrieveLocalData();
    studentId = getParameterByName('studentId');
    populateForm();
}