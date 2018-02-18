var id, title, location, description, reqs, applicantsId;
var bannerUrl, hq, size, industry, website, photosUrl, logoUrl, openPositions;
var sid, name, school, year, major, GPA, minor, profilePic, status, positionId, positionTitle, companyId, appStatus, intern, applications, username, password
var tutorId, studentName, date, mentees, companyName
var mailing, senderId, senderType,message;


var Positions = {
    id,
    title,
    location,
    description,
    reqs,
    status,
    applicantsId //array
};

var applicationInfo = {
    companyId,
    positionTitle,
    positionId, //array
    appStatus //array
}

var mentee = {
    studentName,
    companyName,
    date
}

var Company = {
    name,
    id,
    bannerUrl,
    hq,
    size,
    industry, //array
    website,
    photosUrl, //array
    logoUrl,
    openPositions, //array,
    title,
    description,
    username,
    password,
    mailing //array
};

var allCompanies = [];
var allStudents = [];
var allTutors = [];

var Student = {
    sid,
    name,
    school,
    year,
    major,
    GPA,
    minor,
    profilePic,
    status,
    applications, //array
    username,
    password,
    intern,
    mailing //array
}

var Tutor = {
    tutorId,
    name,
    school,
    year,
    major,
    GPA,
    minor,
    profilePic,
    intern,
    mentees, //array
    username,
    password,
    mailing //array

}

var mail = {
    senderId,
    senderType,
    message
}