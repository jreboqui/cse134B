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

    var URL = student.profilePic;
    field = document.querySelector('#imgURL');
    field.value = URL;
    console.log(field.value);

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
    document.getElementById("imgURL").reset();
    document.getElementById("name").reset(); 
    document.getElementById("schoolname").reset(); 
    document.getElementById("year").reset(); 
    document.getElementById("major").reset(); 
    document.getElementById("gpa").reset(); 
    document.getElementById("intern").reset(); 
}

function updateProfile(){
    student = allStudents[1];
    student.profilePic = document.getElementById("imgURL").value;
    student.name = document.getElementById("name").value; 
    student.school = document.getElementById("schoolname").value; 
    student.year = document.getElementById("year").value; 
    student.major = document.getElementById("major").value; 
    student.GPA = document.getElementById("gpa").value;
    
    //document.getElementById("intern").value;
    console.log(allStudent);
	localStorage.setItem('allStudents',JSON.stringify(allStudent));
	console.log("Initialized local storage");
}

function updateImg(){
    var imgURL = document.getElementById("imgURL").value;
    document.getElementById("profileImg").src = imgURL;
}

function retrieveLocalData(){
    var retrivedStudents = localStorage.getItem('allStudents');
    retrivedStudents = JSON.parse(retrivedStudents);
    allStudents = retrievedStudents;
    console.log(allStudents);
}

window.onload = function() {
    //populateStudents();
    retrieveLocalData();
    populateForm(1);
}