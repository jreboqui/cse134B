function populateSidebar(tutorId) {

    var tutor;

    for (var i = 0; i < allTutors.length; i++) {
        if (this.allTutors[i].tutorId == tutorId) {

            tutor = allTutors[i];

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













window.onload = function() {

    retrieveLocalData1();
    tutorId = 1;
    // studentId = getParameterByName('studentId');

    populateSidebar(tutorId);

    //populateApplicationTable(studentId);

    //populateOpenings();

}