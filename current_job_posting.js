var companyId;
var jobId;
var userType;
var userId;
var jobTitle;

function setJumbotronBackground(companyId){
	var banner = document.getElementsByClassName("jumbotron");
	console.log(banner);
	var bannerUrl = ""
	for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
			bannerUrl = allCompanies[i].bannerUrl;
			break;
		}
	}
	banner.backgroundImage = "url('amazon-banner.PNG')";
}


function fillUpCompanyDetails(companyId){
		var list = document.getElementById('id-comp-details');
		var comp;
		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				comp = allCompanies[i];
				break;
			}
		}

		var item = document.createElement('li');
		var content = document.createTextNode("Headquarters: " + comp.hq);
		item.appendChild(content);
		list.appendChild(item);

		item = document.createElement('li'); 
		content = document.createTextNode("Size: " + comp.size + " Employees");
		item.appendChild(content);
		list.appendChild(item);

		var inds = "";
		for(var i = 0; i < comp.industry.length; i++){
			console.log(comp.industry[i]);
			inds = inds + comp.industry[i] + ", ";
		}

		item = document.createElement('li'); 
		content = document.createTextNode("Industry: " + inds);
		item.appendChild(content);
		list.appendChild(item);

		item = document.createElement('li'); 
		content = document.createTextNode("Website: " + comp.website);
		item.appendChild(content);
		list.appendChild(item);
}


function populatePhotoList(companyId){
		var list = document.getElementById('id-ul-photos');
		var photos;
		for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				photos = allCompanies[i].photosUrl;
				break;
			}
		}

		var item,content;
		for(var i = 0; i < photos.length; i++){
			item = document.createElement('li');
			content = document.createElement("img");
			content.setAttribute('src',photos[i]);
			content.setAttribute('alt','image');
			content.setAttribute('height','100px');
			content.setAttribute('width','100px');
			item.appendChild(content);
			list.appendChild(item);
		}
}

function populateJobDescription(companyId,jobId){
	var jobs;
	var title;
	var location;
	var description;
	var requirement;
	var applicantsId;
	for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				jobs = allCompanies[i].openPositions;
				break;
			}
	}

	for(var i = 0; i < jobs.length; i++){
		if(jobs[i].id == jobId){
			title = jobs[i].title;
			jobTitle=jobs[i].title;
			location = jobs[i].location;
			description = jobs[i].description;
			requirements = jobs[i].reqs;
			applicantsId = jobs[i].applicantsId;
		}
	}

	//Position Header
	var header = document.getElementById('id-curr-job-title');
	
	var headerLeft = document.createElement('h2');
	var headerTitle = document.createTextNode(title);
	headerLeft.appendChild(headerTitle);
	header.appendChild(headerLeft);
	headerLeft.setAttribute("style","float:left");

	var headerRight = document.createElement('h2');
	var headerLocation = document.createTextNode(location);
	headerRight.appendChild(headerLocation);
	header.appendChild(headerRight);
	headerRight.setAttribute("style","float:right");

	header.classList.add("curr-job-title");


	//Position Description
	document.getElementById("id-p-job-description").innerHTML = description;
	document.getElementById("id-p-requirements").innerHTML = requirements;

}

function onClickEdit(){
	location.href = "edit_job_posting.html" + "?companyId=" + companyId + "&id=" + jobId;
}

function setButton(){
		if(userType != 'c'){
			document.getElementById("btn-filled").style.visibility='hidden';
			document.getElementById("btn-edit").style.visibility='hidden';
			document.getElementById("btn-remove").style.visibility='hidden';
		}

		if(userType == 'c'){
			document.getElementById("btn-apply").style.visibility='hidden';
		}
}


function retrieveLocalData(){
		var retrivedCompanies = localStorage.getItem('allCompanies');
		retrivedCompanies = JSON.parse(retrivedCompanies);
		allCompanies = retrivedCompanies;
		console.log(allCompanies);

		var retrievedStudents = localStorage.getItem('allStudents');
	    retrievedStudents = JSON.parse(retrievedStudents);
	    allStudents = retrievedStudents;
	    console.log("Printing all students");
	    console.log(allStudents);

		userType = localStorage.getItem('userType');
		userId = localStorage.getItem('userId');
}


function addApplication(studentId, compId, positionId, positionTitle, appStatus) {
	    var newApp = Object.create(applicationInfo);
	    newApp.companyId = compId;
	    newApp.positionTitle = positionTitle;
	    newApp.positionId = positionId;
	    newApp.appStatus = "Under Review";

	    for (i = 0; i < allStudents.length; i++) {
	        if (allStudents[i].sid == studentId) {
	            allStudents[i].applications.push(newApp);
	            //console.log("Just added new position to the allStudent object");
	            //console.log(allStudents[i].applications);
	            console.log(allStudents[i]);
	            break;
	        }
	    }

	    for(i = 0; i < allCompanies.length; i++){
	    	if(allCompanies[i].id == compId){
	    		break;
	    	}
	    }

	    for(var j = 0; j < allCompanies[i].openPositions.length; j++){
	    	if(allCompanies[i].openPositions[j].id == jobId){
	    		allCompanies[i].openPositions[j].applicantsId.push(studentId);
	    		//console.log("Just added new applicantId to the allCompanies object");
	    		//console.log(allCompanies[i].openPositions[j].applicantsId);
	    		break;
	    	}
	    }

	    localStorage.setItem('allCompanies', JSON.stringify(allCompanies));
	    localStorage.setItem('allStudents', JSON.stringify(allStudents));

	    alert(positionTitle + " position with" + allCompanies[i].name + " has been added to your applications!");
	    location.href = "profile_page.html" + "?studentId=" + studentId;
}


function populateApplicants(companyId, jobId){
	var list = document.getElementById('ul-applicants');
	console.log("in populateApplicants");

	for(var i = 0; i < allStudents.length; i++){
		console.log("i");
		for(var j = 0; j < allStudents[i].applications.length; j++){
			if(companyId == allStudents[i].applications[j].companyId && 
				allStudents[i].applications[j].positionId == jobId){
					console.log("inside");
					var item = document.createElement('li');
					var photo = document.createElement('img');
					photo.setAttribute('src',allStudents[i].profilePic);
					photo.setAttribute('alt','image');
					photo.setAttribute('height','200px');
					photo.setAttribute('width','200px');
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
					a.setAttribute('href',"company_applicant.html?studentId=" +allStudents[i].sid+
						"&companyId" + companyId + "&jobId=" + jobId);
					detail.appendChild(a);

					item.appendChild(detail);
					list.appendChild(item);
					break;
			}
		}
	}
}



function onClickApply(){
	addApplication(userId,companyId,jobId,jobTitle,"");
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
	retrieveLocalData();
	setButton();
	companyId = getParameterByName('companyId');
	jobId = getParameterByName('id');
	setJumbotronBackground(companyId); //Still need to be fixed
	fillUpCompanyDetails(companyId);
	populatePhotoList(companyId);
	populateJobDescription(companyId,jobId);
	populateApplicants(companyId,jobId);
};