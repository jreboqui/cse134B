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

function populateForm(studentId) {
    var student;
    //console.log("Hello");
    for (var i = 0; i < allStudents.length; i++) {
        if (this.allStudents[i].sid == studentId) {

            student = allStudents[i];
            // console.log(photo);
        }
    }

    var fullname = student.name;
    field = document.querySelector('#name');
    field.value = fullname;
    console.log(field.value);

    var school = student.school;
    field = document.querySelector('#schoolname');
    field.value = school;
    console.log(field.value);

    var year = student.year;
    field = document.querySelector('#year');
    field.value = year;
    console.log(field.value);

    var major = student.major;
    field = document.querySelector('#major');
    field.value = major;
    console.log(field.value);

    var gpa = student.GPA;
    field = document.querySelector('#gpa');
    field.value = gpa;
    console.log(field.value);

    var intern = student.company;
    field = document.querySelector('#intern');
    field.value = intern;
    console.log(field.value);
}

function resetForm(){
    document.getElementById("name").reset(); 
    document.getElementById("schoolname").reset(); 
    document.getElementById("year").reset(); 
    document.getElementById("major").reset(); 
    document.getElementById("gpa").reset(); 
    document.getElementById("intern").reset(); 
}

function updateProfile(){
    document.getElementById('name').value;
}

window.onload = function() {
    populateStudents();

    populateForm(1);
}