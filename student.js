function addStudent(name, sid, school, year, major, GPA, minor, Pic) {
    var newStudent = Object.create(Company);

    newStudent.name = name;
    newStudent.sid = sid;
    newStudent.school = school;
    newStudent.year = year;
    newStudent.major = major;
    newStudent.GPA = GPA;
    newStudent.minor = minor;
    newStudent.profilePic = Pic;
    newStudent.status = "Looking for internship";
    newStudent.companies = [
        ["Salesforce", "SWE Intern", "Hired"],
        ["Amazon", "SWE Intern", "Offered"],
        ["Teradata", "Data Science Intern", "Ghosted"]
    ];



    this.allStudents.push(newStudent);
}

function populateStudents() {
    this.addStudent("Kevin Pansawira", "1", "UCSD", "2018", "Computer Science", "3.99", "none", "kpan.jpg");

}

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

function addApplication() {

    var companyName = "Amazon";
    var position = "SWE Intern";
    var status = "Hired";

}

function populateApplicationTable(studentId) {
    var student;

    for (var i = 0; i < allStudents.length; i++) {
        if (this.allStudents[i].sid == studentId) {

            student = allStudents[i];

        }
    }

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

    var myTable = document.getElementById("theContent");
    var table2 = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY')
    console.log(student.companies.length);
    console.log(student.companies[0].length);
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

}

populateOpenings() {


}
window.onload = function() {
    populateStudents();

    populateSidebar(1);

    populateApplicationTable(1);

    populateOpenings();

}