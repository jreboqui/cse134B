function populateSidebar(studentId) {

    var student;

    for (var i = 0; i < allStudents.length; i++) {
        if (this.allStudents[i].sid == studentId) {

            student = allStudents[i];

        }
    }

    var photo;

    var info = document.getElementById('profileInfo');

    var name = document.createElement("p");
    var studentName = document.createTextNode(student.name);
    name.appendChild(studentName);
    info.appendChild(name);

    //var name = document.getElementById('name');
    //name.innerHTML = student.name;


    var pic = document.createElement("img");
    pic.setAttribute('src', student.profilePic);
    pic.setAttribute('alt', "Kevin Pansawira");
    pic.setAttribute('width', "200");
    pic.setAttribute('height', "200");

    info.appendChild(pic);

    var status = document.createElement("p");
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

function populateApplicationTable(studentId) {
    

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

    var myTable = document.getElementById("theContent");
    var table2 = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY')
    //console.log(student.companies.length);
    //console.log(student.companies[0].length);
    if (student.companies != null){
        for (i = 0; i < student.companies.length; i++) {
            var tr = document.createElement('TR');
            for (j = 0; j < student.companies[i].length; j++) {
                var th = document.createElement('TH');
                console.log(student.companies[i][j]);
                th.appendChild(document.createTextNode(student.companies[i][j]));
                tr.appendChild(th);
            }
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

function loadCompanyListings(compId){
    console.log(compId);
}

function populateOpenings(){
    console.log("called populateOpenings");
    console.log(allCompanies.length);
    console.log(allCompanies[0].openPositions.length);
    var compListings = document.getElementById('compListings');
    
    for (i = 0; i < allCompanies.length; i++){
        if (allCompanies[i].openPositions.length > 0){
            console.log(allCompanies[i].name);
            var icon = document.createElement('IMG');
            icon.setAttribute('src', allCompanies[i].logoUrl);
            icon.setAttribute('alt', allCompanies[i].name);
            icon.setAttribute('width', "200");
            icon.setAttribute('height', "100");
            icon.setAttribute('border', "0");
            icon.addEventListener('click', function (e) {     
                window.location = "student_companylistings.html";
            });
            compListings.appendChild(icon);
        }
    }
}


function retrieveLocalData1(){
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
}

window.onload = function() {
    
    retrieveLocalData1();

    populateSidebar(1);

    populateApplicationTable(1);

    populateOpenings();

}