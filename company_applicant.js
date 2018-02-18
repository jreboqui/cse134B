var studentId;
var companyId;
var jobId;

function populateStudentProfile(studentId) {

    var student;

    for (var i = 0; i < allStudents.length; i++) {
        if (this.allStudents[i].sid == studentId) {
            student = allStudents[i];
        }
    }

    var photo;


    var pic = document.createElement("img");
    pic.setAttribute('src', student.profilePic);
    pic.setAttribute('alt', "image");
    pic.setAttribute('width', "200");
    pic.setAttribute('height', "200");


    var info = document.getElementById('profileInfo');
    info.appendChild(pic);


    var status = document.createElement("h3");
    var studentName = document.createTextNode("Name: " + student.name);
    status.appendChild(studentName);
    status.appendChild(document.createElement("br"));

    var studentStatus = document.createTextNode("Status: " + student.status);
    status.appendChild(studentStatus);
    status.appendChild(document.createElement("br"));

    var studentSchool = document.createTextNode("School : " + student.school);
    status.appendChild(studentSchool);
    status.appendChild(document.createElement("br"));
    var studentMajor = document.createTextNode("Major : " + student.major);
    status.appendChild(studentMajor);
    status.appendChild(document.createElement("br"));
    var studentGPA = document.createTextNode("GPA : " + student.GPA);
    status.appendChild(studentGPA);
    status.appendChild(document.createElement("br"));
    var studentYear = document.createTextNode("Year : " + student.year);
    status.appendChild(studentYear);


    info.appendChild(status);
}


function retrieveLocalData1(){
    var retrivedCompanies = localStorage.getItem('allCompanies');
    retrivedCompanies = JSON.parse(retrivedCompanies);
    allCompanies = retrivedCompanies;

    var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;
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

window.onload = function() {
    retrieveLocalData1();
    studentId = getParameterByName('studentId')
    companyId = getParameterByName('companyId');
    jobId = getParameterByName('jobId');
    populateStudentProfile(studentId);
}