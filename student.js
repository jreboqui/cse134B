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
    newStudent.companies = [];

    this.allStudents.push(newStudent);
}

function populateStudents() {
    this.addStudent("Kevin Pansawira", "1", "UCSD", "2018", "Computer Science", "3.99", "none", "kpan.jpg");

}

function populateSidebar(studentId) {

    var student;
    //console.log("Hello");
    for (var i = 0; i < allStudents.length; i++) {
        if (this.allStudents[i].sid == studentId) {

            student = allStudents[i];
            // console.log(photo);
        }
    }

    var photo;

    var info = document.getElementById('profileInfo');

    var name = document.createElement("p");
    var studentName = document.createTextNode(student.name);
    name.appendChild(studentName);
    info.appendChild(name);


    var pic = document.createElement("img");
    var status = document.createElement("p");
    var major = document.createElement
    pic.setAttribute('src', student.profilePic);
    pic.setAttribute('alt', "Kevin Pansawira");
    pic.setAttribute('width', "200");
    pic.setAttribute('height', "200");

    info.appendChild(pic);

    var info2 = document.createElement("p");

    var text = document.createTextNode()







}

window.onload = function() {
    populateStudents();

    populateSidebar(1);

}