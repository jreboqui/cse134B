var companyId;
var jobId;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function retrieveLocalData(){
		var retrivedCompanies = localStorage.getItem('allCompanies');
		retrivedCompanies = JSON.parse(retrivedCompanies);
		allCompanies = retrivedCompanies;
		//console.log(allCompanies);
}

function populateForm(){
	for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
			break;
		}
	}


	for(var j = 0; j < allCompanies[i].openPositions.length; j++){

		if(allCompanies[i].openPositions[j].id == jobId){
			document.getElementById("title").value = allCompanies[i].openPositions[j].title;
			document.getElementById("location").value = allCompanies[i].openPositions[j].location;
			document.getElementById("description").value = allCompanies[i].openPositions[j].description;
			document.getElementById("reqs").value = allCompanies[i].openPositions[j].reqs;
		}
	}
}

function onClickSave(){
	
	for(var i = 0; i < allCompanies.length; i++){
		if(this.allCompanies[i].id == companyId){
			break;
		}
	}


	for(var j = 0; j < allCompanies[i].openPositions.length; j++){

		if(allCompanies[i].openPositions[j].id == jobId){
			allCompanies[i].openPositions[j].title = document.getElementById("title").value;
			allCompanies[i].openPositions[j].location = document.getElementById("location").value;
			allCompanies[i].openPositions[j].description = document.getElementById("description").value;
			allCompanies[i].openPositions[j].reqs = document.getElementById("reqs").value;
		}
	}

	localStorage.setItem('allCompanies',JSON.stringify(allCompanies));
	location.href="current_job_posting.html" + "?edit=1&companyId=" + companyId + "&id=" + jobId;
	//window.history.back();
}

function onClickCancel(){
	window.history.back();
}


window.onload = function() {
	retrieveLocalData();
	companyId = getParameterByName("companyId");
	jobId = getParameterByName("id");
	populateForm();
}