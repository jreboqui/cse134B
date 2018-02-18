var studentId;
var tutorId;
var companyId;

function addStudent(name, sid, school, year, major, GPA, minor, Pic, username, password, intern) {
    var newStudent = Object.create(Student);

    newStudent.name = name;
    newStudent.sid = sid;
    newStudent.school = school;
    newStudent.year = year;
    newStudent.major = major;
    newStudent.GPA = GPA;
    newStudent.minor = minor;
    newStudent.profilePic = Pic;
    newStudent.status = "Looking for internship";
    newStudent.applications = [];
    newStudent.username = username;
    newStudent.password = password;
    newStudent.intern = intern;

    this.allStudents.push(newStudent);
}

function addTutor(username, password, name, tutorId, school, year, major, GPA, minor, intern, profilePic){
    var newTutor = Object.create(Tutor);

    newTutor.name = name;
    newTutor.tutorId = tutorId;
    newTutor.school = school;
    newTutor.year = year;
    newTutor.major = major;
    newTutor.GPA = GPA;
    newTutor.minor = minor;
    newTutor.profilePic = profilePic;
    newTutor.username = username;
    newTutor.password = password;
    newTutor.intern = intern;
    newTutor.mentees = [];
    newTutor.mailing = [];

    this.allTutors.push(newTutor);
}

function addCompany(username, password, name, id, bannerUrl, hq, size, industry, website, photosUrl, logoUrl, title, description) {
    var newComp = Object.create(Company);

    newComp.name = name;
    newComp.id = id;
    newComp.bannerUrl = bannerUrl;
    newComp.hq = hq;
    newComp.size = size;
    newComp.industry = industry;
    newComp.website = website;
    newComp.photosUrl = photosUrl;
    newComp.logoUrl = logoUrl;
    newComp.openPositions = [];
    newComp.title = title;
    newComp.description = description;
    newComp.username = username;
    newComp.password = password;

    this.allCompanies.push(newComp);
}

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
    var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;
    console.log("Printing all students");
    console.log(allStudents);

    var retrievedTutors = localStorage.getItem('allTutors');
    retrievedTutors = JSON.parse(retrievedTutors);
    allTutors = retrievedTutors;
    console.log("Printing all tutors");
    console.log(allTutors);

    var retrivedCompanies = localStorage.getItem('allCompanies');
    retrivedCompanies = JSON.parse(retrivedCompanies);
    allCompanies = retrivedCompanies;
    console.log("Printing all companies");
    console.log(allCompanies);
}

function onClickReset(){
    document.getElementById("username").reset();
    document.getElementById("pwd").reset(); 
    document.getElementById("userType").reset(); 
}

function onClickSave(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
    var type = document.getElementById("userType").value;

    if(type == "s"){
		for(var i = 0; i < allStudents.length; i++){
			if(allStudents[i].username == username) {
                alert("Username has been taken!");
            }
            else {
                studentId = allStudents.length + 1;
                console.log("studentId: " + studentId);
                this.addStudent(name, studentId, "", "", "", "", "", "", username, pwd, "");
                console.log(allStudents);
                localStorage.setItem("userType", type);
                localStorage.setItem('allStudents',JSON.stringify(allStudents));
                alert("Profile Created");
                location.href="profile_page.html" + "?studentId=" + studentId;
				//window.location = "profile.html";	
            }
            break;
		}
    }
    
    if(type == "t"){
		for(var i = 0; i < allTutors.length; i++){
			if(allTutors[i].username == username) {
                alert("Username has been taken!");
            }
            else {
                tutorId = allTutors.length + 1;
                this.addTutor(username, pwd, name, tutorId, "", "", "", "", "", "", "");
                console.log(allTutors);
                localStorage.setItem("userType", type);
                localStorage.setItem('allTutors',JSON.stringify(allTutors));
                alert("Profile Created");
                location.href="profile_page.html" + "?tutorId=" + tutorId;
				//window.location = "profile.html";	
            }
            break;
		}
	}
    
    if(type == "c"){
		for(var i = 0; i < allCompanies.length; i++){
			if(allCompanies[i].username == username) {
                alert("Username has been taken!");
            }
            else {
                companyId = allCompanies.length + 1;
                console.log()
                this.addCompany(username, pwd, name, companyId, "", "", "", "", "", "", "", "", "");
                console.log(allCompanies);
                localStorage.setItem("userType", type);
                localStorage.setItem('allCompanies',JSON.stringify(allCompanies));
                alert("Profile Created");
                location.href="company.html" + "?companyId=" + companyId;
				//window.location = "profile.html";	
            }
            break;
		}
	}
    
}

function onClickCancel(){
	window.history.back();
}

window.onload = function() {
    retrieveLocalData();
}