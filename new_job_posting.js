var companyId;

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

function onClickPost(){
	retrieveLocalData();
	var comp;
	
	for(var i = 0; i < allCompanies.length; i++){
			if(this.allCompanies[i].id == companyId){
				break;
			}
	}

	var newPos = Object.create(Positions);
	newPos.id = (allCompanies[i].openPositions.length + 1).toString();
	newPos.title = document.getElementById("title").value;
	newPos.location = document.getElementById("location").value;
	newPos.description = document.getElementById("description").value;
	newPos.reqs = document.getElementById("reqs").value;
	newPos.applicantsId = []

	allCompanies[i].openPositions.push(newPos);
	localStorage.setItem('allCompanies',JSON.stringify(allCompanies));
	window.history.back();
	//console.log(allCompanies);
	//console.log("Position added!");
}

function onClickCancel(){
	window.history.back();
}

window.onload = function() {
	companyId = getParameterByName("id");
}