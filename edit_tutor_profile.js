var tutorId;

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

    var retrievedTutors = localStorage.getItem('allTutors');
    retrievedTutors = JSON.parse(retrievedTutors);
    allTutors = retrievedTutors;
    console.log("Printing all tutors");
    console.log(allTutors);
}

function populateForm() {
    for(var i = 0; i < allTutors.length; i++){
		if(this.allTutors[i].tutorId == tutorId){
            document.getElementById("profileImg").src = allTutors[i].profilePic;
			document.getElementById("imgURL").value = allTutors[i].profilePic;
            document.getElementById("name").value = allTutors[i].name;
            document.getElementById("schoolname").value = allTutors[i].school;
            document.getElementById("year").value = allTutors[i].year;
            document.getElementById("major").value = allTutors[i].major;
            document.getElementById("minor").value = allTutors[i].minor;
            document.getElementById("status").value = allTutors[i].status;
            document.getElementById("gpa").value = allTutors[i].GPA;
         
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
}

function onClickSave(){
    console.log("Updating Profile");
    console.log("tutorId" + tutorId);

    for(var i = 0; i < allTutors.length; i++){
		if(this.allTutors[i].tutorId == tutorId){
			allTutors[i].profilePic = document.getElementById("imgURL").value;
            allTutors[i].name = document.getElementById("name").value; 
            allTutors[i].school = document.getElementById("schoolname").value; 
            allTutors[i].year = document.getElementById("year").value; 
            allTutors[i].major = document.getElementById("major").value; 
            allTutors[i].minor = document.getElementById("minor").value;
            allTutors[i].status = document.getElementById("status").value;
            allTutors[i].GPA = document.getElementById("gpa").value;
            break;
		}
	}
    
    console.log(allTutors);
    localStorage.setItem('allTutors',JSON.stringify(allTutors));
    location.href="tutor_profile_page.html" + "?tutorId=" + tutorId;
}

function onClickCancel(){
	window.history.back();
}

function loadImg(){
    for(var i = 0; i < allTutors.length; i++){
		if(this.allTutors[i].sid == tutorId){
            document.getElementById("profileImg").src = allTutors[i].profilePic;
            break;
        }
    }
}

window.onload = function() {
    retrieveLocalData();
    tutorId = getParameterByName('tutorId');
    populateForm();
}