var id, title, location, description, reqs, applicantsId;
var bannerUrl, hq, size, industry, website, photosUrl, logoUrl, openPositions;
var sid, name, school, year, major, GPA, minor, profilePic, status, positionTitle, companyId, appStatus, applications, username, password
var tid, studentName, date, mentees
var Positions = {
    id,
    title,
    location,
    description,
    reqs,
    applicantsId //array
};

var applicationInfo = {
    companyId,
    positionTitle, //array
    appStatus //array
}

var mentee = {
    studentName,
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
    password
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
    password

}

var Tutor = {
    tid,
    name,
    school,
    year,
    major,
    GPA,
    minor,
    profilePic,
    mentees, //array
    username,
    password


}