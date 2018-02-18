var companyId;
var jobId;
var userType;

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

		userType = localStorage.getItem('userType');
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
	companyId = getParameterByName('companyId');
	jobId = getParameterByName('id');
	setJumbotronBackground(companyId); //Still need to be fixed
	fillUpCompanyDetails(companyId);
	populatePhotoList(companyId);
	populateJobDescription(companyId,jobId);
	setButton();
};