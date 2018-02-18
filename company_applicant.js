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


function onClickMessage() {
    location.href = "messaging.html";
}

function setButtons() {
    console.log("setButtons called");
    if (userType != 'c') {
        document.getElementById("offer").style.display = 'none';
        document.getElementById("reject").style.display = 'none';

        document.getElementById('progressbar').style.display = 'none';
        document.getElementById('h3stat').style.display = 'none';
        document.getElementById('label1').style.display = 'none';
        document.getElementById('dropdown').style.display = 'none';

    }

}

function setProgress() {
    console.log("setProgress called");
    var pBar = document.getElementById('progressbar');
    var img = document.getElementById('dropdown');
    var value = img.options[img.selectedIndex].value;
    console.log(value);
    if (value == "s") {
        pBar.setAttribute('src', "progress_screeninggreen.jpg");
        pBar.setAttribute('height', '100px');
        pBar.setAttribute('width', '500px');
    } else if (value == 'i') {
        pBar.setAttribute('src', "progress_interviewgreen.jpg");
        pBar.setAttribute('height', '100px');
        pBar.setAttribute('width', '500px');
    } else if (value == 'r') {
        pBar.setAttribute('src', "progress_reviewgreen.jpg");
        pBar.setAttribute('height', '100px');
        pBar.setAttribute('width', '500px');
    } else {}

}


function populateOtherApplicants(companyId, jobId, studentId) {
    var list = document.getElementById('ul-applicants');
    console.log("in populateOtherApplicants");

    for (var i = 0; i < allStudents.length; i++) {
        console.log("i");
        for (var j = 0; j < allStudents[i].applications.length; j++) {
            if (companyId == allStudents[i].applications[j].companyId &&
                allStudents[i].applications[j].positionId == jobId) {
                console.log("inside");
                var item = document.createElement('li');
                var photo = document.createElement('img');
                photo.setAttribute('src', allStudents[i].profilePic);
                photo.setAttribute('alt', 'image');
                photo.setAttribute('height', '200px');
                photo.setAttribute('width', '200px');
                //photo.setAttribute('href',"company_applicant.html?studentId=" +allStudents[i].sid+
                //"&companyId" + companyId + "&jobId=" + jobId);
                item.appendChild(photo);

                var detail = document.createElement('h4curr');

                var name = document.createTextNode(allStudents[i].name);
                var br = document.createElement("br");
                detail.appendChild(name);
                detail.appendChild(br);

                var school = document.createTextNode(allStudents[i].school);
                var br = document.createElement("br");
                detail.appendChild(school);
                detail.appendChild(br);

                var gpa = document.createTextNode("GPA: " + allStudents[i].GPA);
                var br = document.createElement("br");
                detail.appendChild(gpa);
                detail.appendChild(br);

                var a = document.createElement("a");
                a.textContent = allStudents[i].applications[j].appStatus;
                a.setAttribute('href', "company_applicant.html?studentId=" + allStudents[i].sid +
                    "&companyId" + companyId + "&jobId=" + jobId);
                detail.appendChild(a);

                item.appendChild(detail);
                list.appendChild(item);
                break;
            }
        }
    }
}


function retrieveLocalData1() {
    var retrivedCompanies = localStorage.getItem('allCompanies');
    retrivedCompanies = JSON.parse(retrivedCompanies);
    allCompanies = retrivedCompanies;

    var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;

    userType = localStorage.getItem('userType');
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
    setButtons();

    populateOtherApplicants(companyId, jobId, studentId);
}