var studentId;
var tutorId;
var userType;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function populateSidebar(Id) {
    var name;
    if (userType == 's'){
        var student;
        var photo;
        var studentStat;
        var major;
        var school;
        var gpa;
        var year;

        for (var i = 0; i < allStudents.length; i++) {
            if (this.allStudents[i].sid == Id) {
    
                student = allStudents[i];
    
            }
        }
        name = student.name;
        photo = student.profilePic;
        studentStat = student.status;
        school = student.school;
        major = student.major;
        gpa = student.GPA;
        year = student.year;
    } else {
        var tutor;
        for (var i = 0; i < allTutors.length; i++) {
            if (this.allTutors[i].tutorId == Id) {

                tutor = allTutors[i];
    
            }
        }
        name = tutor.name;
        photo = tutor.profilePic;
        school = tutor.school;
        major = tutor.major;
        gpa = tutor.GPA;
        minor = tutor.minor;
        year = tutor.year;
        intern = tutor.intern;
    }

   


    var info = document.getElementById('profileInfo');

   

    //var name = document.getElementById('name');
    //name.innerHTML = student.name;


    var pic = document.createElement("img");
    pic.setAttribute('src', photo);
    pic.setAttribute('alt', name);
    pic.setAttribute('width', "200");
    pic.setAttribute('height', "200");

    info.appendChild(pic);

    var pElem = document.createElement("p");
    var stName = document.createTextNode(name);
    pElem.appendChild(stName);
    info.appendChild(pElem);

    var status = document.createElement("p");
    if (userType == 's'){
        var studentStatus = document.createTextNode("Status: " + studentStat);
        status.appendChild(studentStatus);
        status.appendChild(document.createElement("br"));
    }
    
    var studentSchool = document.createTextNode("School : " + school);
    status.appendChild(studentSchool);
    status.appendChild(document.createElement("br"));
    var studentMajor = document.createTextNode("Major : " + major);
    status.appendChild(studentMajor);
    status.appendChild(document.createElement("br"));
    var studentGPA = document.createTextNode("GPA : " + gpa);
    status.appendChild(studentGPA);
    status.appendChild(document.createElement("br"));
    var studentYear = document.createTextNode("Year : " + year);
    status.appendChild(studentYear);
    status.appendChild(document.createElement("br"));
    if (userType == 't'){
        var studentStatus = document.createTextNode("Previous Internship: " + intern);
        status.appendChild(studentStatus);
        
    }

    info.appendChild(status);



}

function populateApplicationTable(studentId) {

    console.log("called populateApplicationsTable");
    //Student companies


    var myTableDiv = document.getElementById("theHead");
    var table = document.createElement('TABLE');
    var thead = document.createElement('THEAD');
    table.appendChild(thead);

    var trow = document.createElement('TR');
    thead.appendChild(trow);

    var heading = new Array();
    heading[0] = "Company";
    heading[1] = "Position";
    heading[2] = "Status";

    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading[i]));
        trow.appendChild(th);
    }

    myTableDiv.appendChild(table);

    var student;

    for (var i = 0; i < allStudents.length; i++) {
        if (this.allStudents[i].sid == studentId) {

            student = allStudents[i];

        }
    }

    console.log(student);

    var myTable = document.getElementById("theContent");
    var table2 = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    //console.log(student.companies.length);
    //console.log(student.companies[0].length);
    if (student.applications != null) {
        console.log("if statement reached");
        console.log(student.applications.length);
        for (i = 0; i < student.applications.length; i++) {
            console.log("inside first for loop");
            var th1 = document.createElement('TH');
            var th2 = document.createElement('TH');
            var th3 = document.createElement('TH');
            var tr = document.createElement('TR');
            console.log(student.applications[i]);
            console.log(student.applications[i].appStatus);
            console.log(student.applications[i].positionTitle);

            th2.appendChild(document.createTextNode(student.applications[i].positionTitle));
            th3.appendChild(document.createTextNode(student.applications[i].appStatus));
            //get companyName
            var compName;
            for (j = 0; j < allCompanies.length; j++) {
                if (allCompanies[j].id == student.applications[i].companyId) {
                    compName = allCompanies[i].name;
                    console.log(compName);
                }
            }
            th1.appendChild(document.createTextNode(compName));

            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tableBody.appendChild(tr);
        }
        table2.appendChild(tableBody);
        myTable.appendChild(table2);
    } else {
        var tr = document.createElement('TR');
        var th = document.createElement('TH');

        th.appendChild(document.createTextNode("No current applications"));
        tr.appendChild(th);
        tableBody.appendChild(tr);
        table2.appendChild(tableBody);
        myTable.appendChild(table2);

    }

}

function loadCompanyListings(compId) {
    var comp;

    for (i = 0; i < allCompanies.length; i++) {
        if (allCompanies[i].id == compId) {
            comp = allCompanies[i];
            break;
        }
    }

    location.href = "company.html?" + allCompanies.id;
}

function populateOpenings() {
    console.log("called populateOpenings");
    console.log(allCompanies.length);
    console.log(allCompanies[0].openPositions.length);
    var compListings = document.getElementById('compListings');

    for (i = 0; i < allCompanies.length; i++) {
        if (allCompanies[i].openPositions.length > 0) {
            console.log(allCompanies[i].name);
            var aLink = document.createElement('a');
            aLink.setAttribute('href', "company.html?companyId=" + allCompanies[i].id);
            var icon = document.createElement('IMG');
            icon.setAttribute('src', allCompanies[i].logoUrl);
            icon.setAttribute('alt', allCompanies[i].name);
            icon.setAttribute('width', "200");
            icon.setAttribute('height', "100");
            icon.setAttribute('border', "0");
            aLink.appendChild(icon);
            // icon.onclick = loadCompanyListings(allCompanies[i].id);

            compListings.appendChild(aLink);
        }
    }
}


function retrieveLocalData1() {
    console.log("in retrieveLocalData");
    var retrivedCompanies = localStorage.getItem('allCompanies');
    retrivedCompanies = JSON.parse(retrivedCompanies);
    allCompanies = retrivedCompanies;
    console.log("Printing");
    console.log(allCompanies);

    var retrievedStudents = localStorage.getItem('allStudents');
    retrievedStudents = JSON.parse(retrievedStudents);
    allStudents = retrievedStudents;
    console.log("Printing all students");
    console.log(allStudents);

    var retrievedTutors = localStorage.getItem('allTutors');
    retrievedTutors = JSON.parse(retrievedTutors);
    allTutors = retrievedTutors;
    console.log("Printing all Tutors");
    console.log(allTutors);

    userType = localStorage.getItem('userType');

}

function onClickEdit() {
    location.href = "edit_profile.html" + "?studentId=" + studentId;
}

window.onload = function() {

    retrieveLocalData1();
    
    if (userType == 's'){
        console.log("Student usertype");
        studentId = getParameterByName('studentId');
        console.log(studentId);

        populateSidebar(studentId);

        populateApplicationTable(studentId);

        populateOpenings();

    }

    else {
        console.log("Tutor usertype");
        tutorId = getParameterByName('tutorId');
        console.log(tutorId);

        populateSidebar(tutorId);

        populateOpenings();

        
    }
    
}